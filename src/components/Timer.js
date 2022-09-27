import style from "./Timer.module.scss"

export default function Timer({ timeLeft }) {

  return (
    <div className={`${style.timer} d-flex`}>
      <h4 className="mr-10">Il vous reste</h4>
      <strong>{timeLeft} s</strong>
    </div>
  )
}
