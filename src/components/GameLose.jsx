/* eslint-disable react/prop-types */
import '../styles/_GameLose.css'
import latios from '../assets/latios-wallpaper.jpg'

export default function GameLose({open, startGame}) {
    if (!open) return null

    return (
      <div className="overlay">
        <img src={latios} className='loseGame'>
          <div>You Lose!, Get More Badges and Try Again!</div>
          <button className='startGameBtn' onClick={startGame}>New Game</button>
        </img>
      </div>    
    )
}