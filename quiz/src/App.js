import React, { useContext } from 'react';
import SetForm from './form';

import { QuizContext } from './context';

import './App.css';

function App() {

  const { showStartForm } = useContext(QuizContext);

  console.log('showStartForm', showStartForm);

  return (
    <div className="App">
      {showStartForm && <SetForm />}
      {/* <button onClick={hider} type="button">Change visibility</button> */}
    </div>
  );
}




export default App;