import { useState, useEffect } from "react";
import { questions } from "../data/QuestionsList.js"
import style from "./Content.module.scss";
import ProgressBar from "./ProgressBar";
import Quizz from "./Quizz";
import Timer from "./Timer";

export default function Content() {
  
  // STATE ------------------------------------
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [widthProgressBar, setWidthProgressBar] = useState(0);
  
  // STATE ------------------------------------

  // TIMER ------------------------------------

  useEffect(() => {
    timeLeft > 0 && setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000);
  }, [timeLeft])

// TIMER ---------------------------------------

// QUIZZ --------------------------------
const handleClick = () => {
  setWidthProgressBar(widthProgressBar + 1)
  if(currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  } else {
    alert("Le resultat s'affichera ici")
  }
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
      handleClick={handleClick} />
    </div>  
  )
}
