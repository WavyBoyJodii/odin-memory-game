import { useState, useEffect } from 'react'
import _ from 'lodash'
import CardCase from './components/CardCase'
import GameWin from './components/GameWin'
import GameLose from './components/GameLose'
import Pokedex from './pokedex'
import pokeJohto from './assets/pokeJohto.png'
import './App.css'
import './fonts/Pokemon-Solid.ttf'

function App() {
  const [ score, setScore] = useState(0)
  const [ bestScore, setBestScore ] = useState(0)
  const [pokeArray, setPokeArray] = useState(Pokedex)
  const [ memory, setMemory ] = useState([])
  const [winScreen, setWinScreen] = useState(false)
  const [loseScreen, setLoseScreen] = useState(false)

  useEffect(() => {
    setPokeArray(_.shuffle(Pokedex))
  }, [])

  function cardClick(e) {
    const clicked = e.currentTarget.getAttribute('value');
    if (memory.includes(clicked)) {
      gameOver();
    } else {
      setMemory(memory.concat(clicked));
      setScore(score + 1);
      setPokeArray(_.shuffle(Pokedex));
    }
  }

  function gameOver() {
    setScore(0);
    if (score > bestScore) setBestScore(score);
    setPokeArray(_.shuffle(Pokedex));
    setMemory([]);
  }
  function checkWin() {
    if (score === 12) {
    setWinScreen(true);
    // if (score > bestScore) setBestScore(score);
    // setPokeArray(_.shuffle(Pokedex));
    // setMemory([]);
    }
  }
  function newGame() {

  }

  return (
    <div className='mainPage'>
      <header>
        <img src={pokeJohto} className='logo' />
        <div className='scoreBox'>
          <div className='scores'>Score: {score}</div>
          <div className='scores'>Top Score: {bestScore}</div>
        </div>
      </header>
      <CardCase pokemon={pokeArray} clickHandler={cardClick}/>
      <GameWin open={winScreen}/>
      <GameLose open={loseScreen}/>
    </div>
  )
}

export default App
