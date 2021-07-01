import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import styles from './AddUser.module.css';


const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // These above always are objects. Always have a 'current' property, which holds an actual value that ref is connected with;

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  const [error, setError] = useState(false);


  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserdAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserdAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please, enter a valid name and age (non-empty values).'
      });
      return;
    }

    if (+enteredUserdAge < 1) { // with + we ensure that it is a number.
      setError({
        title: 'Invalid Age',
        message: 'Please, enter a valid age (> 1).'
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserdAge);

    // and to reset you can manipulate DOM without React! It is a rare case!
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // But, we do not really manipulate DOM. We are just changing what user has entered!


    // WE DO NOT NEED THESE BELOW: 
    // setEnteredUsername('');
    // setEnteredAge('');
  };


  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  }


  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />

          <Button type="submit" >
            Add Users
          </Button>
        </form>
      </Card>
    </Wrapper>
  )
}


export default AddUser;