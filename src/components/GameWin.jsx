/* eslint-disable react/prop-types */
import '../styles/_GameWin.css'

export default function GameWin({open, startGame}) {
    if (!open) return null

    return (
      <div className="overlay">
        <div className='winGame'>
          <div>You Win!, your a true Pokemon Master!</div>
          <button className='startGameBtn' onClick={startGame}>New Game</button>
        </div>
      </div>    
    )
}