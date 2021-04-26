import React, { useState, createContext } from 'react';
import axios from 'axios';

export const QuizContext = createContext();

// Geography 22
// const url = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple';

// // History 23 
// const historyUrl = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';

// // Sports 21 
// const sportsUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

// // Politics medium 24 
// const Poliiics = 'https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple';

const CONSTANT_URL = 'https://opentdb.com/api.php?';


const CATEGORY_INDEXES = {
  mythology: 20,
  sports: 21,
  geography: 22,
  history: 23,
  politics: 24,
};



export const QuizProvider = ({ children }) => {
  console.log('Now we are in Context!');

  const [showStartForm, setShowStartForm] = useState(true);
  const [questionsBox, setQuestionsBox] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersSum, setAnswersSum] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);

  const [prerequisites, setPrerequisites] = useState({
    totalQuestions: 1,
    category: 'history',
    difficulty: 'easy'
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



  const handleAxiosTrigger = event => {
    event.preventDefault();
    console.log('handleAxiosTrigger');
    axios
      .get(`${CONSTANT_URL}amount=${prerequisites.totalQuestions}&category=${CATEGORY_INDEXES[prerequisites.category]}&difficulty=${prerequisites.difficulty}&type=multiple`)
      .then(response => {
        if (response.data.results) {
          setQuestionsBox(response.data.results);
          setShowStartForm(!showStartForm);
        }
      })
      .catch(error => {
        console.log('error', error)
      })
  };




  const checkAnswer = (event) => {
    console.log('Now we are checking the answer!');

    const innerText = event.target.innerText;
    const correctAnswer = questionsBox[questionIndex].correct_answer;

    console.log('innerText is', typeof innerText, innerText);
    console.log('correctAnswer is', typeof correctAnswer, correctAnswer);

    if (innerText === correctAnswer && questionIndex + 1 < questionsBox.length) {
      setQuestionIndex(prevIndex => prevIndex + 1);
      setAnswersSum(prevAmount => prevAmount + 1);

    } else if (innerText !== correctAnswer && questionIndex + 1 < questionsBox.length) {
      setQuestionIndex(prevIndex => prevIndex + 1);

    } else if (innerText === correctAnswer && questionIndex + 1 === questionsBox.length) {
      setAnswersSum(prevAmount => prevAmount + 1);
      setShowResult(!showResult);
      setQuizEnded(true);

    } else if (innerText !== correctAnswer && questionIndex + 1 === questionsBox.length) {
      setShowResult(!showResult);
      setQuizEnded(true);
    };
  };



  // console.log('questionsBox in context', typeof questionsBox, questionsBox)


  const handleStartAgain = () => {

    console.log("Now we are restarting current Quiz!");

    setQuestionIndex(0);
    setAnswersSum(0);
  }


  const handleCancelAndTryAgain = () => {
    console.log('Now we are cancelling our Quiz and returning to starting position!');

    setShowStartForm(true);
    setQuestionsBox([]);
    setQuestionIndex(0);
    setAnswersSum(0);
    setShowResult(false);
    setQuizEnded(false);
    setPrerequisites({
      totalQuestions: 1,
      category: 'history',
      difficulty: 'easy'
    });
  }


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
      value={{
        showStartForm,
        prerequisites,
        handleChange,
        handleAxiosTrigger,
        questionsBox,
        checkAnswer,
        questionIndex,
        answersSum,
        showResult,
        quizEnded,
        handleStartAgain,
        handleCancelAndTryAgain
      }}>
      {children}
    </QuizContext.Provider>
  )
};