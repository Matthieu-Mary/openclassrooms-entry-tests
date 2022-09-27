import style from "./Quizz.module.scss";
import Question from "./Question.js";
import ShowScore from "./ShowScore";
import GameOver from "./GameOver"

export default function Quizz({ questions, currentQuestionIndex, handleClick, selectedRes, clickedResponse, showScore, gameOver, goodResponses }) {
  
  return (
    <div className={`${style.quizz} p-20`}>
      {
        gameOver ? 
        <GameOver /> 
        :     
        showScore ? 
        <ShowScore goodResponses={goodResponses}/> 
        :
        <Question 
        id={questions[currentQuestionIndex].id}
        title={questions[currentQuestionIndex].title}
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        handleClick={handleClick}
        selectedRes={selectedRes}
        clickedResponse={clickedResponse}
        /> 
      }
    </div>
  )
}
