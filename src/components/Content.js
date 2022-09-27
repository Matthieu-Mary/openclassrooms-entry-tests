import { useState, useEffect } from "react";
import { questions } from "../data/QuestionsList.js"
import style from "./Content.module.scss";
import ProgressBar from "./ProgressBar";
import Quizz from "./Quizz";
import Timer from "./Timer";

export default function Content() {
  
  // STATE ------------------------------------
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [widthProgressBar, setWidthProgressBar] = useState(0);
  const [selectedRes, setSelectedRes] = useState(false);
  const [goodResponses, setGoodResponses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showScore, setShowScore] = useState(false);

  
  // STATE ------------------------------------

  // TIMER ------------------------------------

  useEffect(() => {
    timeLeft > 0 && setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000);
  }, [timeLeft])

  useEffect(() => {
    timeLeft === 0 ? setGameOver(true) : setGameOver(gameOver);
    console.log(gameOver)
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
}



const clickedResponse = () => {
  setSelectedRes(!selectedRes)
  {questions[currentQuestionIndex].responses.map(response => {
    if(response.isRight === true) {
      setGoodResponses(goodResponses + 1)
    } else {
      setGoodResponses(goodResponses)
    }
  })}
  console.log(goodResponses);
}

// QUIZZ --------------------------------

  return (
    <div className={`${ style.content } d-flex justify-center align-center flex-column`}>
      <Timer timeLeft={timeLeft}/>
      <ProgressBar 
      currentQuestionIndex={currentQuestionIndex}
      widthProgressBar={widthProgressBar} />
      <Quizz 
      questions={questions} 
      currentQuestionIndex={currentQuestionIndex}
      handleClick={handleClick}
      selectedRes={selectedRes}
      clickedResponse={clickedResponse}
      goodResponses={goodResponses}
      showScore={showScore}
      gameOver={gameOver} />
    </div>  
  )
}
