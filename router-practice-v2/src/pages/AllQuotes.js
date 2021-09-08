import useHttp from '../hooks/use-http';
import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../components/ui/LoadingSpinner';


const AllQuotes = () => {
  console.log('AllQuotes');
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    console.log('AllQuotes effect');
    sendRequest();
  }, [sendRequest])

  if (status === "pending") return <div className="centered"><LoadingSpinner /></div>
  if (status === "completed" && error) return <div>Something went wrong</div>

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) return <div>No quotes found!</div>

  return <QuoteList data={loadedQuotes} />
}


export default AllQuotes;