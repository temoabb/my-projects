import React, { useState, createContext } from 'react';

export const QuizContext = createContext();


export const QuizProvider = ({ children }) => {

  const [showStartForm, setShowStartForm] = useState(true);

  const [prerequisites, setPrerequisites] = useState({
    totalQuestions: 12,
    category: 'History',
    difficulty: 'Hard'
  });


  const handleChange = event => {
    // to find out which one is event.target: 
    const { name } = event.target;

    // to find out what is event.target's value: 
    const { value } = event.target;

    setPrerequisites({
      ...prerequisites,
      [name]: value
    });
  };

  // const hider = () => {
  //   setShowStartForm(!showStartForm)
  // }


  // useEffect(() => {
  //   axios
  //     .get(`https://api.github.com/users/${match.params.user}`)
  //     .then(response => {
  //       if (response.data) {
  //         setData(response.data)
  //         setLoading(false)
  //       }
  //     })
  //     .catch(error => {
  //       setLoading(false)
  //     })
  // }, [match])



  return (
    <QuizContext.Provider
      value={{ showStartForm, prerequisites, handleChange }}>
      {children}
    </QuizContext.Provider>
  )
};