import style from "./ProgressBar.module.scss"

export default function ProgressBar({ percentage }) {


  return (
    <div className={`${ style.progressBar }`}>
      <div className={`${ style.progression }`}>{percentage}</div>  
    </div>
  )
}
