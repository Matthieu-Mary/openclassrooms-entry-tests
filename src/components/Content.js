import { useState } from "react";
import style from "./Content.module.scss";
import ProgressBar from "./ProgressBar";
import Quizz from "./Quizz";
import Timer from "./Timer";

export default function Content() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div className={`${ style.content } d-flex justify-center align-center flex-column`}>
      <Timer />
      <ProgressBar />
      <Quizz currentQuestionIndex={currentQuestionIndex} />
    </div>  
  )
}
