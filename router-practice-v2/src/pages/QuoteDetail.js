import { useParams } from "react-router-dom";

import { DUMMY_DATA } from "../dummy-data";

import SingleQuote from '../components/quotes/SingleQuote';

const QuoteDetail = () => {
  console.log('QuoteDetail');

  const params = useParams();
  const { quoteId } = params;

  // const location = useLocation();
  // const { pathname } = location;

  const desiredQuote = DUMMY_DATA.find(quote => quote.id === quoteId);

  if (!desiredQuote) return <p>No quote found!</p>;

  const { title, author } = desiredQuote;

  return <SingleQuote quote={title} author={author} />
};

export default QuoteDetail;