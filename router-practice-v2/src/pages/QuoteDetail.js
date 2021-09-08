import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import SingleQuote from '../components/quotes/SingleQuote';
import LoadingSpinner from "../components/ui/LoadingSpinner";

const QuoteDetail = () => {
  console.log('QuoteDetail');

  const params = useParams();
  const { quoteId } = params;

  const { sendRequest: getSingleQuoteData, status, error, data: singleQuoteData } = useHttp(getSingleQuote, true);

  console.log(status);

  useEffect(() => {
    getSingleQuoteData(quoteId);
  }, [getSingleQuoteData, quoteId]);


  if (status === 'pending') return <div className="centered"><LoadingSpinner /></div>;

  if (error) return <div className="centere"><h1>Something went wrong!</h1></div>;

  // if (!singleQuoteData.quote) return <div className="centered">No data found</div>

  if (status === 'completed') return <SingleQuote quote={singleQuoteData.quote} author={singleQuoteData.author} />
};

export default QuoteDetail;