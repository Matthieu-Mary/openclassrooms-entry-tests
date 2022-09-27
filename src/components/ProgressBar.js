import style from "./ProgressBar.module.scss"

export default function ProgressBar({ widthProgressBar }) {

  return (
    <div className={`${ style.progressBar }`}>
      <div className={
      `${ style.progression } 
        ${widthProgressBar === 0 
         ? "" : widthProgressBar === 1
         ? `${style.progression20}` : widthProgressBar === 2 
         ? `${style.progression40}` : widthProgressBar === 3 
         ? `${style.progression60}` : widthProgressBar === 4
         ? `${style.progression80}` : widthProgressBar === 5
         ? `${style.progression100}` : `${style.progression100}`}
      `}>
        {
        widthProgressBar === 1 ? "20%" : 
        widthProgressBar === 2 ? "40%" : 
        widthProgressBar === 3 ? "60%" : 
        widthProgressBar === 4 ? "80%" : 
        widthProgressBar === 5 ? "100%" : 
        ''
        }
      </div>  
    </div>
  )
}
