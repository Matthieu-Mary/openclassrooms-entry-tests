
export default function Response({resTitle, resId, index, event, handleFocus, clickedElement}) {
  
  

  return (
    <input 
    onFocus={(event) => handleFocus(event, index)} 
    className={`btn btn-reverse-primary mb-10 ${clickedElement === index ? 'btn-selected' : ''}`} 
    type="button" 
    value={`${resId} -  ${resTitle}`} />
  )
}
