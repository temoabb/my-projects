import { useHistory } from "react-router";
import { useEffect } from "react";

import useHttp from "../hooks/use-http";

import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from '../lib/api';


const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
}

export default NewQuote;