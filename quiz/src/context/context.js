import React, { useState, createContext } from 'react';
import axios from 'axios';

export const QuizContext = createContext();

const CONSTANT_URL = 'https://opentdb.com/api.php?';
const CATEGORY_INDEXES = {
  mythology: 20,
  sports: 21,
  geography: 22,
  history: 23,
  politics: 24,
};



export const QuizProvider = ({ children }) => {
  // console.log('Now we are in Context!');

  const [showStartForm, setShowStartForm] = useState(true);
  const [questionsBox, setQuestionsBox] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersSum, setAnswersSum] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [prerequisites, setPrerequisites] = useState({
    totalQuestions: 12,
    category: 'history',
    difficulty: 'easy'
  });



  const handleChange = event => {

    const { name } = event.target;
    const { value } = event.target;

    setPrerequisites({
      ...prerequisites,
      [name]: value
    });
  };



  const handleAxiosTrigger = event => {
    event.preventDefault();

    setLoadingData(true);
    setShowStartForm(false);

    // console.log('handleAxiosTrigger');

    axios
      .get(`${CONSTANT_URL}amount=${prerequisites.totalQuestions}&category=${CATEGORY_INDEXES[prerequisites.category]}&difficulty=${prerequisites.difficulty}&type=multiple`)
      .then(response => {
        if (response.data.results) {
          setQuestionsBox(response.data.results);
          setLoadingData(false);
        }
      })
      .catch(error => {
        setLoadingData(false);
        setShowStartForm(true);
        console.log('error', error);
      })
  };




  const checkAnswer = (event) => {
    // console.log('Now we are checking the answer!');

    const innerText = event.target.innerText;
    const correctAnswer = questionsBox[questionIndex].correct_answer;

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




  const handleStartAgain = () => {
    // console.log("Now we are restarting current Quiz!");

    setQuestionIndex(0);
    setAnswersSum(0);
  };


  const handleCancelAndTryAgain = () => {
    // console.log('Now we are cancelling our Quiz and returning to starting position!');

    setShowStartForm(true);
    setQuestionsBox([]);
    setQuestionIndex(0);
    setAnswersSum(0);
    setShowResult(false);
    setQuizEnded(false);
    setLoadingData(false);
    setPrerequisites({
      totalQuestions: 12,
      category: 'history',
      difficulty: 'easy'
    });
  };


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
        handleCancelAndTryAgain,
        loadingData
      }}>
      {children}
    </QuizContext.Provider>
  )
};