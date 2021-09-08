import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { postQuote } from '../lib/api';

import QuoteForm from '../components/quotes/QuoteForm';


// component
const NewQuote = () => {
  console.log('NewQuote is running');
  const history = useHistory();

  const { sendRequest: sendPostRequest, status } = useHttp(postQuote);
  console.log('status', status);

  const postDataHandler = (enteredData) => {
    sendPostRequest(enteredData);
  };

  useEffect(() => {
    console.log('effect NewQUote')
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history])

  return (
    <QuoteForm
      isLoading={status === 'pending'}
      onPostEnteredData={postDataHandler}
    />
  )
};

export default NewQuote;