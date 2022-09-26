import style from "./Question.module.scss"

export default function Question({id, title, resA, resB, resC}) {
  return (
    <div className={style.question}>
        <h3 className='mb-20'>{`${id} - ${title}`}</h3>
        <div className="d-flex flex-column justify-center align-center">
          <input className='btn btn-reverse-primary mb-10' type="button" value={`a- ${resA}`}/>
          <input className='btn btn-reverse-primary mb-10' type="button" value={`b- ${resB}`}/>
          <input className='btn btn-reverse-primary mb-20' type="button" value={`c- ${resC}`}/>
          <button className="btn btn-primary w-40">Valider</button>
        </div>
    </div>
  )
}
