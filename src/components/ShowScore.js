
export default function ShowScore({ goodResponses }) {
  return (
    <div className={`p-20 d-flex justify-center`}>
        <h4>Votre score est de { goodResponses } / 5</h4>
    </div>
  )
}
