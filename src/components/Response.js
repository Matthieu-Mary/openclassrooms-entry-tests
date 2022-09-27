
export default function Response({resTitle, resId, selectedRes, clickedResponse, goodResponses}) {

  return (
    <input 
    onClick={() => clickedResponse()} 
    className={`btn btn-reverse-primary mb-10 ${selectedRes ? 'btn-selected' : ''}`} 
    type="button" 
    value={`${resId} -  ${resTitle}`} />
  )
}
