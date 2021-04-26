import React, { useContext } from 'react';
import { QuizContext } from '../../context/context';

import CustomButton from '../custom-button/custom-button.component';

import './question-display.styles.css';



const QuestionDisplay = () => {
  // console.log('Now we are in Questიons Display!');

  const { questionsBox, questionIndex, checkAnswer, answersSum, handleCancelAndTryAgain, handleStartAgain, prerequisites } = useContext(QuizContext);

  const necessaryPieceOfQuestions = questionsBox[questionIndex];

  const correctAnswer = necessaryPieceOfQuestions.correct_answer;

  let answers = [...necessaryPieceOfQuestions.incorrect_answers];

  let randomDigit = Math.floor(Math.random() * 4);

  if (randomDigit === 3) {
    answers.push(correctAnswer);
  } else {
    let elemOfAction = answers[randomDigit];
    answers[randomDigit] = correctAnswer;
    answers.push(elemOfAction);
  }


  // console.log('---  STOPS HERE ---');

  return (
    <div className="question-container">

      <div className="question-div">
        <h1 className="question" dangerouslySetInnerHTML={{ __html: necessaryPieceOfQuestions.question }} />
      </div>

      <div className="current-result">
        <p>{`Question: ${questionIndex + 1} from ${questionsBox.length}`}</p>
        <p>{`Correct answers: ${answersSum} / ${questionsBox.length}`}</p>
      </div>

      <div className="answers-div">
        {answers.map((item, index) => {
          return < CustomButton
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
            onClick={checkAnswer}
            className="answers-btn" />
        })}
      </div>

      <div className="start-cancel-panel">
        <p>Category: <strong>{prerequisites.category.toUpperCase()}</strong></p>
        <div>
          <CustomButton
            onClick={handleStartAgain}
            text="Start Quiz Again"
            className="start-again-btn" />

          <CustomButton
            onClick={handleCancelAndTryAgain}
            text="CANCEL QUIZ"
            className="cancel-btn" />
        </div>
      </div>
    </div>
  )
};



export default QuestionDisplay;