import style from "./Question.module.scss";
import { useState } from "react"

export default function Question({id, title, resA, resB, resC}) {

  const [errorMessage, setErrorMessage] = useState("")
  const [selected, setSelected] = useState(false);

  const handleClick = (id) => {
    setSelected(!selected)
  }

  return (
    <div className={style.question}>
        <h3 className='mb-20'>{`${id} - ${title}`}</h3>
        <div className="d-flex flex-column justify-center align-center">
          <input id={1} onClick={(id) => handleClick()} className={`btn btn-reverse-primary mb-10 ${selected ? 'btn-selected' : ''}`} type="button" value={`a- ${resA}`}/>
          <input id={2} onClick={handleClick} className={`btn btn-reverse-primary mb-10 ${selected ? 'btn-selected' : ''}`} type="button" value={`b- ${resB}`}/>
          <input id={3} onClick={handleClick} className={`btn btn-reverse-primary mb-20 ${selected ? 'btn-selected' : ''}`} type="button" value={`c- ${resC}`}/>
          <button className="btn btn-primary w-40 mb-10">Valider</button>
          <small className={style.errorMessage}>{errorMessage}</small>
        </div>
    </div>
  )
}
