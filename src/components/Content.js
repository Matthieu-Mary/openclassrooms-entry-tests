import { useState, useEffect } from "react";
import { questions } from "../data/QuestionsList.js"
import style from "./Content.module.scss";
import ProgressBar from "./ProgressBar";
import Quizz from "./Quizz";
import Timer from "./Timer";

export default function Content() {
  
  // STATE ------------------------------------
  const [timeLeft, setTimeLeft] = useState(999);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [widthProgressBar, setWidthProgressBar] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedElement, setClickedElement] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [showScore, setShowScore] = useState(false);
  // STATE ------------------------------------

  // TIMER ------------------------------------
  useEffect(() => {
    const timer = timeLeft > 0 && setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000);
    if (showScore) {
      clearTimeout(timer)
    }
  }, [timeLeft, showScore])

  useEffect(() => {
    timeLeft === 0 ? setGameOver(true) : setGameOver(gameOver);
  }, [timeLeft, gameOver])
// TIMER ---------------------------------------


// QUIZZ --------------------------------
const handleClick = () => {
  setWidthProgressBar(widthProgressBar + 1)
  if(currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  } else {
    setShowScore(true);
  } 
  console.log(score)
  setClickedElement(null)
}


const handleClickedResponse = (index) => {
  const isCorrect = (questions[currentQuestionIndex].responses[index].isRight === true);
  setClickedElement(index);
  console.log(score);
  isCorrect ? setScore(score + 1) : setScore(score);
}
// QUIZZ --------------------------------


// GAME OVER --------------------------------
const handlePlayAgain = () => {
  setTimeLeft(60);
  setGameOver(false);
  setCurrentQuestionIndex(0);
  setWidthProgressBar(0);
}
// GAME OVER --------------------------------

  return (
    <div className={`${ style.content } d-flex justify-center align-center flex-column`}>
      <Timer 
      timeLeft={timeLeft}
      />
      <ProgressBar 
      currentQuestionIndex={currentQuestionIndex}
      widthProgressBar={widthProgressBar} 
      />
      <Quizz 
      questions={questions} 
      currentQuestionIndex={currentQuestionIndex}
      handleClick={handleClick}
      handleClickedResponse={handleClickedResponse}
      score={score}
      showScore={showScore}
      clickedElement={clickedElement}
      gameOver={gameOver} 
      handlePlayAgain={handlePlayAgain}
      />
    </div>  
  )
}
