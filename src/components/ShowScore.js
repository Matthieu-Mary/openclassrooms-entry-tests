
export default function ShowScore({ handlePlayAgain, verifiedScore }) {
  return (
    <div className={`p-20 d-flex justify-center flex-column align-center`}>
        <h4 className="mb-20">Votre score est de { verifiedScore } / 5</h4>
        <button onClick={handlePlayAgain} className="btn btn-reverse-primary">Rejouer</button>
    </div>
  )
}
