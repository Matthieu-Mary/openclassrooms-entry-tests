
export default function ShowScore({ score }) {
  return (
    <div className={`p-20 d-flex justify-center`}>
        <h4>Votre score est de { score } / 5</h4>
    </div>
  )
}
