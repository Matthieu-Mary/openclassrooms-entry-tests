import style from "./Quizz.module.scss";
import Question from "./Question.js"


export default function Quizz({ questions, currentQuestionIndex }) {
  
  return (
    <div className={`${style.quizz} p-20`}>
          <Question 
          id={questions[0].id}
          title={questions[0].title}
          questions={questions}
          />
    </div>
  )
}
