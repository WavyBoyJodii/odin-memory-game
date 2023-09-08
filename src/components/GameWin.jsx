/* eslint-disable react/prop-types */
import '../styles/_GameWin.css'
import kanto from '../assets/kanto-wallpaper.jpg'

export default function GameWin({open, startGame}) {
    if (!open) return null

    return (
      <div className="overlay">
        <img src={kanto} className='modalImage'/>
        <div className='winGame'>
          <div>You Win!, your a true Pokemon Master!</div>
          <button className='startGameBtn' onClick={startGame}>New Game</button>
        </div>
      </div>    
    )
}