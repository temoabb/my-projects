import { useState } from 'react';
import CommentForm from './CommentForm';
import Comments from './Comments';
import classes from './SingleQuote.module.css';

const SingleQuote = ({ quote, author }) => {
  console.log('SingleQuote');

  const [startedAddingComment, setStartedAddingComment] = useState(false);
  const [startedLoadingComments, setStartedLoadingComments] = useState(false);

  const addingCommentHandler = () => setStartedAddingComment(addingComment => !addingComment);
  const startLoadingHandler = () => setStartedLoadingComments(loadingComments => !loadingComments);

  return (
    <div className={classes.quotecard}>
      <div className={classes.quote}>
        <h1>{quote}</h1>
        <p>Author: {author}</p>
      </div>
      {!startedAddingComment && (
        <button
          className={`btn btn-success ${classes.newcommentbtn}`}
          onClick={addingCommentHandler}>
          New comment
        </button>
      )}
      {startedAddingComment && <CommentForm onCancelAddingNewComment={addingCommentHandler} />}
      {!startedLoadingComments && (
        <button
          className={`btn btn-success ${classes.loadbtn}`}
          onClick={startLoadingHandler}>
          Load all comments
        </button>
      )}
      {startedLoadingComments && <Comments />}
    </div>
  )
};

export default SingleQuote;