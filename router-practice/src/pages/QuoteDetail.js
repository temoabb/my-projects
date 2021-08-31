import { Fragment } from "react";
import { useParams, Route } from "react-router";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learing React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' }
];


const QuoteDetail = () => {
  const params = useParams();
  console.log(params);
  const desiredQuote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!desiredQuote) return <p>No quote found!</p>;

  return (
    <Fragment>
      <HighlightedQuote text={desiredQuote.text} author={desiredQuote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`} component={Comments} />
    </Fragment>
  )
};

export default QuoteDetail;