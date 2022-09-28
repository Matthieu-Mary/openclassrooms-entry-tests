
export default function Response({resTitle, resId, index, handleClickedResponse, clickedElement}) {
  
  

  return (
    <input 
    onClick={() => handleClickedResponse(index)} 
    className={`btn btn-reverse-primary mb-10 ${clickedElement === index ? 'btn-selected' : ''}`} 
    type="button" 
    value={`${resId} -  ${resTitle}`} />
  )
}
