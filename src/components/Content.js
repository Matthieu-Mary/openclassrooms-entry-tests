import { useState, useEffect } from "react";
import { questions } from "../data/QuestionsList.js"
import style from "./Content.module.scss";
import ProgressBar from "./ProgressBar";
import Quizz from "./Quizz";
import Timer from "./Timer";

export default function Content() {

  // TIMER ------------------------------------

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    timeLeft > 0 && setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000);
  }, [timeLeft])

// TIMER ---------------------------------------


// PROGRESS-BAR --------------------------------

  const [percentage, setPercentage] = useState("");

// PROGRESS-BAR --------------------------------


// QUIZZ --------------------------------

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questions[0]);

// QUIZZ --------------------------------

  return (
    <div className={`${ style.content } d-flex justify-center align-center flex-column`}>
      <Timer timeLeft={timeLeft}/>
      <ProgressBar percentage={percentage} />
      <Quizz 
      questions={questions} 
      setCurrentQuestionIndex={setCurrentQuestionIndex} 
      currentQuestionIndex={currentQuestionIndex} />
    </div>  
  )
}
