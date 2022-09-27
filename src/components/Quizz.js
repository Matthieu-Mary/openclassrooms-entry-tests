import style from "./Quizz.module.scss";
import Question from "./Question.js"


export default function Quizz({ questions, currentQuestionIndex, handleClick }) {
  
  return (
    <div className={`${style.quizz} p-20`}>
          <Question 
          id={questions[currentQuestionIndex].id}
          title={questions[currentQuestionIndex].title}
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          handleClick={handleClick}
          />
    </div>
  )
}
