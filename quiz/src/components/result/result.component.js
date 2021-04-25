import React, { useContext } from 'react';
import { QuizContext } from '../../context/context';



const Result = () => {
  const { answersSum, questionsBox, handleCancelAndTryAgain } = useContext(QuizContext);

  return (
    <div>
      <h1>Your Quiz has just ended!</h1>
      <h2>Your result is {answersSum} correct answer out of {questionsBox.length} questions!</h2>
      <button onClick={handleCancelAndTryAgain}>START AGAIN</button>
    </div>
  )
};



export default Result;