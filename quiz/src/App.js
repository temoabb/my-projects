import React, { useContext } from 'react';
import { QuizContext } from './context/context';

import SetQuizForm from './components/form/set-quiz-form.component';
import QuestionDisplay from './components/question-display/question-display.component';
import Result from './components/result/result.component';

import './App.css';

function App() {

  const { showStartForm, showResult, quizEnded } = useContext(QuizContext);


  // console.log('showStartForm', showStartForm);
  // console.log('showResult', showResult) 

  return (
    <div className="App">
      {showStartForm && !quizEnded && <SetQuizForm />}
      {!showStartForm && !quizEnded && <QuestionDisplay />}
      {showResult && quizEnded && <Result />}
    </div>
  );
}




export default App;