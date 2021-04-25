import React, { useContext } from 'react';
import { QuizContext } from '../../context/context';



const QuestionDisplay = () => {
  const { questionsBox, questionIndex, checkAnswer, answersSum, handleCancelAndTryAgain, handleStartAgain } = useContext(QuizContext);
  console.log('ALL QUESTIONS in this category', typeof questionsBox, questionsBox);
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


  console.log('--- STOPS HERE ---');

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: necessaryPieceOfQuestions.question }} />
      <span>{`${answersSum} from ${questionsBox.length}`}</span>

      <div>
        <button dangerouslySetInnerHTML={{ __html: answers[0] }} onClick={checkAnswer}></button>
        <button dangerouslySetInnerHTML={{ __html: answers[1] }} onClick={checkAnswer}></button>
        <button dangerouslySetInnerHTML={{ __html: answers[2] }} onClick={checkAnswer}></button>
        <button dangerouslySetInnerHTML={{ __html: answers[3] }} onClick={checkAnswer}></button>
      </div>
      <div>
        <button onClick={handleStartAgain}>START AGAIN</button>
        <button onClick={handleCancelAndTryAgain}>CANCEL Quiz</button>
      </div>
    </div>
  )
}



export default QuestionDisplay;