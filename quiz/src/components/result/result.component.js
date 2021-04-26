import React, { useContext } from 'react';
import { QuizContext } from '../../context/context';

import CustomButton from '../custom-button/custom-button.component';

import './result.styles.css';


const Result = () => {

  const { answersSum, questionsBox, handleCancelAndTryAgain } = useContext(QuizContext);
  const amountOfQuestions = questionsBox.length;
  const percentage = Math.round((answersSum / amountOfQuestions) * 100);

  // console.log('percentage', percentage);

  return (
    <div className="results-div">
      <h1 className="ending-ad">Quiz has just ended!</h1>
      <p className="final-results">Your result is <b>{answersSum} correct answer </b> out of {amountOfQuestions} questions! ({answersSum} / {amountOfQuestions})</p>
      <p className="percentage">Percentage: <b> {percentage}%! </b> </p>

      <CustomButton
        onClick={handleCancelAndTryAgain}
        text="Try Again" />
    </div>
  )
};



export default Result;