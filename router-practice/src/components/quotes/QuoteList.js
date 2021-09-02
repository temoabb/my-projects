import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';

import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};


const QuoteList = ({ quotes }) => {
  console.log('AllQuotes > QuoteList running');

  const history = useHistory();
  const location = useLocation();

  // console.log('location', location);

  // location.search() > initially: nothing, after push: ?sort=asc or ?sort=desc
  const queryParams = new URLSearchParams(location.search); // new URLSearchParams is a default JS class, which we can use in the browser:
  // console.log('queryParams', queryParams);
  const isSortingAscending = queryParams.get('sort') === 'asc'; // initially false;

  const sortedQuotes = sortQuotes(quotes, isSortingAscending);


  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname, // /quotes
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`
    })

    // history.push(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`)
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
