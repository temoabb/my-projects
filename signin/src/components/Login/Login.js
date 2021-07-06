import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const TYPED_EMAIL = "TYPED_EMAIL";
const TYPED_PASSWORD = "TYPED_PASSWORD";
const BLURRED_EMAIL_INPUT = "BLURRED_EMAIL_INPUT";
const BLURRED_PASSWORD_INPUT = "BLURRED_PASSWORD_INPUT";

const initialState = { entered: '', isValid: '' };


const generalReducer = (state, action) => {
  switch (action.type) {
    case TYPED_EMAIL:
      return {
        entered: action.payload,
        isValid: action.payload.includes('@')
      }
    case TYPED_PASSWORD:
      return {
        entered: action.payload,
        isValid: action.payload.trim().length > 6
      }
    case BLURRED_EMAIL_INPUT:
      return {
        entered: state.entered,
        isValid: state.entered.includes('@')
      }
    case BLURRED_PASSWORD_INPUT:
      return {
        entered: state.entered,
        isValid: state.entered.trim().length > 6
      }
    default:
      return new Error();
  }
};



// component

const Login = (props) => {
  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(generalReducer, initialState);
  const [passwordState, passwordDispatch] = useReducer(generalReducer, initialState);

  // This is not a value assignment. This is an alias assignment
  const { isValid: isValidEmail } = emailState;
  const { isValid: isValidPassword } = passwordState;


  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        isValidEmail && isValidPassword
      );
    }, 500);
    return () => {
      clearInterval(identifier);
    }
  }, [isValidEmail, isValidPassword]);



  const emailChangeHandler = (event) => {
    emailDispatch({ type: TYPED_EMAIL, payload: event.target.value });
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: BLURRED_EMAIL_INPUT });
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: TYPED_PASSWORD, payload: event.target.value });
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: BLURRED_PASSWORD_INPUT });
  };


  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      ctx.onLogin(emailState.entered, passwordState.entered);

    } else if (!isValidEmail) {
      emailInputRef.current.focus();

    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          label="E-mail"
          id="email"
          isValid={isValidEmail}
          entered={emailState.entered}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="password"
          label="Password"
          id="password"
          isValid={isValidPassword}
          entered={passwordState.entered}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};



export default Login;