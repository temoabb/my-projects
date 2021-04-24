import React, { useContext } from 'react';
import { QuizContext } from './context';


const SetForm = () => {
  const { prerequisites, handleChange } = useContext(QuizContext);

  return (

    <form style={{ border: '1px solid #000', padding: 10, display: 'flex', flexDirection: 'column', width: 500 }}>

      <h2>Welcome! Please choose prerequisites and click START NOW!</h2>


      {/* number  */}
      <label htmlFor="number">Choose number of questions:</label>
      <input
        id="number"
        type="number"
        value={prerequisites.totalQuestions}
        onChange={handleChange}
        name="totalQuestions"
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
        <option value="sport">Sport</option>
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
        <option value="easy">Eeas</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>



      <button type="submit">Start Quiz</button>
    </form>
  )
};


export default SetForm;