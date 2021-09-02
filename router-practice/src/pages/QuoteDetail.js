import { Fragment, useEffect } from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";

import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import LoadingSpinner from "../components/UI/LoadingSpinner";
import Comments from '../components/comments/Comments';

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Max', text: 'Learing React is fun!' },
//   { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' }
// ];


const QuoteDetail = () => {
  const params = useParams();
  console.log(params);
  const { quoteId } = params;

  const match = useRouteMatch();
  console.log("match", match);
  console.log("match.path", match.path);

  // getSingleQuote in useCallback dependencies (in useHttp)
  const { sendRequest: sendSingleQuoteRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendSingleQuoteRequest(quoteId);
  }, [sendSingleQuoteRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'><LoadingSpinner /></div>
    )
  };

  if (error) return <p className="centered">{error}</p>;
  if (!loadedQuote.text) return <p>No data found</p>;

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {status === 'pending' && <div className='centered'><LoadingSpinner /></div>}
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
};

export default QuoteDetail;