import style from "./Quizz.module.scss";
import Question from "./Question.js";
import ShowScore from "./ShowScore";
import GameOver from "./GameOver";

export default function Quizz({ questions, currentQuestionIndex, handleClick, handleClickedResponse, showScore, gameOver, clickedElement, score, handlePlayAgain }) {
  

  return (
    <div className={`${style.quizz} p-20`}>
      {
        gameOver ? 
        <GameOver 
        handlePlayAgain={handlePlayAgain}
        /> 
        :     
        showScore ? 
        <ShowScore score={score}/> 
        :
        <Question 
        id={questions[currentQuestionIndex].id}
        title={questions[currentQuestionIndex].title}
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        clickedElement={clickedElement}
        handleClick={handleClick}
        handleClickedResponse={handleClickedResponse}
        /> 
      }
    </div>
  )
}
