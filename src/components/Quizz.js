import style from "./Quizz.module.scss";
import Question from "./Question.js"
import { questions } from "../data/QuestionsList.js"

export default function Quizz({id, title, resA, resB, resC, currentQuestionIndex}) {

  return (
    <div className={`${style.quizz} p-20`}>
        {questions.map(question => (
          <Question 
          id={question.id}
          title={question.title}
          resA={question.resA}
          resB={question.resB}
          resC={question.resC}
          />
        ))}
    </div>
  )
}
