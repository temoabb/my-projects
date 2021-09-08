import classes from './CommentForm.module.css';
import { useRef } from 'react';

const CommentForm = ({ onAddNewComment, onCancelAddingNewComment }) => {
  const textareaRef = useRef();

  const submitHandler = () => {
    onAddNewComment({
      newComment: textareaRef.current.value
    })
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <textarea ref={textareaRef} rows="4"></textarea>
      <div className={classes.controls}>
        <button type="button" className={`btn ${classes["cancel-btn"]}`} onClick={onCancelAddingNewComment}>Cancel</button>
        <button type="submit" className="btn btn-success">Add comment</button>
      </div>
    </form>
  )
};


export default CommentForm;