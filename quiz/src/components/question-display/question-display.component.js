import React, { useContext } from 'react';
import { QuizContext } from '../../context/context';

import CustomButton from '../custom-button/custom-button.component';

import './question-display.styles.css';



const QuestionDisplay = () => {
  console.log('Now we are in Questons Display!');

  const { questionsBox, questionIndex, checkAnswer, answersSum, handleCancelAndTryAgain, handleStartAgain, prerequisites } = useContext(QuizContext);
  // console.log('ALL QUESTIONS in this category', typeof questionsBox, questionsBox);
  // console.log('INDEX which we can use to find out which question is coming now: ', questionIndex);

  const necessaryPieceOfQuestions = questionsBox[questionIndex];
  // console.log('exact question pack at the moment: ', necessaryPieceOfQuestions);

  const correctAnswer = necessaryPieceOfQuestions.correct_answer;
  // console.log('correctAnswer', correctAnswer);

  let answers = [...necessaryPieceOfQuestions.incorrect_answers];
  // console.log('answers at first (these are all wrong): ', answers);

  let randomDigit = Math.floor(Math.random() * 4);

  if (randomDigit === 3) {
    answers.push(correctAnswer);
    // console.log('All answers, the last one is correct', answers);
  } else {
    let elemOfAction = answers[randomDigit];
    // console.log('elemOfAction: ', elemOfAction);
    answers[randomDigit] = correctAnswer;
    answers.push(elemOfAction);
    // console.log('All answers, includes correct one too: ', answers);
  }

  // console.log(answers[0]);
  // console.log(answers[1]);
  // console.log(answers[2]);
  // console.log(answers[3]);

  // allAnswer.sort(() => Math.random() - 0.5);


  console.log('--- Questions display STOPS HERE ---');

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