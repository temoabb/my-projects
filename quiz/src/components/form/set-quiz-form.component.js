import React, { useContext } from 'react';
import { QuizContext } from '../../context/context';


import './set-quiz-form.styles.css';


const SetQuizForm = () => {
  const { prerequisites, handleChange, handleAxiosTrigger } = useContext(QuizContext);

  return (

    <form onSubmit={handleAxiosTrigger} style={{ border: '1px solid #000', padding: 10, display: 'flex', flexDirection: 'column', width: 500 }}>

      <h2>Welcome! Please choose prerequisites and click START NOW!</h2>


      {/* number  */}
      <label htmlFor="number">Choose number of questions:</label>
      <input
        id="number"
        type="number"
        value={prerequisites.totalQuestions}
        onChange={handleChange}
        name="totalQuestions"
        min={1}
        max={10}
      />


      {/* Category  */}
      <label htmlFor="category">Choose Category</label>
      <select
        onChange={handleChange}
        id="category"
        name="category"
        value={prerequisites.category}
      >
        <option value="history">History</option>
        <option value="sports">Sports</option>
        <option value="geography">Geography</option>
      </select>



      {/* difficulty  */}
      <label htmlFor="difficulty">Choose difficulty</label>
      <select
        onChange={handleChange}
        id="difficulty"
        name="difficulty"
        value={prerequisites.difficulty}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>



      <button type="submit">Start Quiz</button>
    </form>
  )
};


export default SetQuizForm;