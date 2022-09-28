import style from "./Question.module.scss";
import Response from "./Response.js";

export default function Question({index, id, title, questions, currentQuestionIndex, handleClick, clickedElement, handleClickedResponse, goodResponses}) {

  return (
    <div className={style.question}>
        <h3 className='mb-20'>{`${id} - ${title}`}</h3>
        <div className="d-flex flex-column justify-center align-center">
        {
          questions[currentQuestionIndex].responses.map((response, index) => (
          <Response 
          key={index}
          resTitle={response.resTitle} 
          resId={response.resId}
          index={index}
          clickedElement={clickedElement}
          handleClickedResponse={handleClickedResponse} 
          />
        ))}

        <button 
          onClick={ handleClick } 
          className="btn btn-primary w-40 mt-10 mb-10">
            Valider
        </button>

        </div>
    </div>
  )
} 
