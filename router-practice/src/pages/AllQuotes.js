import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from "../components/UI/LoadingSpinner";


const AllQuotes = () => {
  // console.log('AllQuotes running');

  const { sendRequest, data: loadedQuotes, status, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return <div className='centered'><LoadingSpinner /></div>
  }

  if (error) return <p className='centered focused'>{error}</p>

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />
};

export default AllQuotes;