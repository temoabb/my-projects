import React, { useContext } from 'react';
import { QuizContext } from './context/context';

import SetQuizForm from './components/form/set-quiz-form.component';
import QuestionDisplay from './components/question-display/question-display.component';
import Result from './components/result/result.component';

import './App.css';

function App() {

  const { showStartForm, showResult, quizEnded, loadingData } = useContext(QuizContext);

  return (
    <div className="App">
      {showStartForm && !quizEnded && <SetQuizForm />}
      {!showStartForm && !quizEnded && !showResult && loadingData && <div><h1 style={{ color: '#4d375d' }}>Please wait...</h1></div>}
      {!showStartForm && !quizEnded && !showResult && !loadingData && <QuestionDisplay />}
      {showResult && quizEnded && <Result />}
    </div>
  );
};




export default App;