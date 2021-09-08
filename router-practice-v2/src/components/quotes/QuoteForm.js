import React, { useState, useRef } from "react";
import { Prompt } from 'react-router-dom';

import LoadingSpinner from '../ui/LoadingSpinner';
import Card from '../ui/Card';

import classes from './QuoteForm.module.css';


const QuoteForm = ({ isLoading, onPostEnteredData }) => {
  console.log('QuoteForm is running');

  const [isEntereing, setIsEntering] = useState(false);
  console.log('isEntering', isEntereing)
  const authorRef = useRef();
  const titleRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorRef.current.value.trim();
    const enteredQuote = titleRef.current.value.trim();

    console.log(enteredAuthor, enteredQuote);

    if (!enteredAuthor || !enteredQuote) {
      alert('Entered field could not be empty!');
      return;
    }

    onPostEnteredData({
      author: enteredAuthor,
      quote: enteredQuote
    });
  };

  const formFocusHandler = () => setIsEntering(true);
  const finishEnteringHandler = () => setIsEntering(false);

  return (
    <React.Fragment>
      <Prompt
        when={isEntereing}
        message={(location) => {
          console.log(location);
          return `You are going to go back: ${location.pathname}! Are you sure you want to leave? Everything will be lost!`
        }}
      />
      {isLoading && <div className="centered"><LoadingSpinner /></div>}

      <Card>
        <form onSubmit={submitHandler} onFocus={formFocusHandler} className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="author">Author:</label>
            <input ref={authorRef} type="text" id="author" />
          </div>
          <div className={classes.control}>
            <label htmlFor="title">Title:</label>
            <textarea ref={titleRef} id="title" rows="5"></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} type="submit" className="btn btn-success">
              Add quote
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  )
};

export default QuoteForm;