import {useState} from "react"

export default function Response({resTitle, resId}) {

  const [selected, setSelected] = useState(false)

  return (
    <input className={`btn btn-reverse-primary mb-10 ${selected ? 'selectedRes' : ''}`} type="button" value={`${resId} -  ${resTitle}`} />
  )
}
