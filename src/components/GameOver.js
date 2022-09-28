
export default function ShowScore({ handlePlayAgain }) {



    return (
      <div className={`p-20 d-flex justify-center flex-column align-center`}>
          <h4 className="mb-20">Perdu, le temps est écoulé</h4>
          <button onClick={handlePlayAgain} className="btn btn-reverse-primary">Rejouer</button>
      </div>
    )
  }