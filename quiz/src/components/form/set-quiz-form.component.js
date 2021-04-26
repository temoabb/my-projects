import React, { useContext } from 'react';
import { QuizContext } from '../../context/context';

import CustomButton from '../custom-button/custom-button.component';

import './set-quiz-form.styles.css';




const SetQuizForm = () => {
  console.log('Now we are in Form!');

  const { prerequisites, handleChange, handleAxiosTrigger } = useContext(QuizContext);

  return (
    <form onSubmit={handleAxiosTrigger} className="quiz-form">
      <h1 className="quiz-form-heading">Welcome! Are you ready?!</h1>

      {/* number  */}

      <label htmlFor="number" className="quiz-form-label">Questions:</label>
      <input
        className="quiz-form-input"
        id="number"
        type="number"
        value={prerequisites.totalQuestions}
        onChange={handleChange}
        name="totalQuestions"
        min={1}
        max={10}
      />


      {/* Category  */}

      <label htmlFor="category" className="quiz-form-label">Category:</label>
      <select
        className="quiz-form-select"
        onChange={handleChange}
        id="category"
        name="category"
        value={prerequisites.category}>

        <option value="history">History</option>
        <option value="sports">Sports</option>
        <option value="geography">Geography</option>
        <option value="politics">Politics</option>
        <option value="mythology">Mythology</option>
      </select>



      {/* difficulty  */}

      <label htmlFor="difficulty" className="quiz-form-label">Difficulty:</label>
      <select
        className="quiz-form-select"
        onChange={handleChange}
        id="difficulty"
        name="difficulty"
        value={prerequisites.difficulty}>

        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>



      {/* start Quiz  */}

      <CustomButton
        type="submit"
        className="submit-btn"
        text="Start Quiz" />
    </form>
  )
};


export default SetQuizForm;