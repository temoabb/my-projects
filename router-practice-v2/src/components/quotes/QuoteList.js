import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const QuoteList = ({ data }) => {
  console.log('QuoteList');

  return (
    <ul className={classes.list}>
      {data.map(item => (
        <QuoteItem
          key={item.id}
          author={item.author}
          quoteId={item.id}
          title={item.quote}
        />
      ))}
    </ul>
  )
};

export default QuoteList;