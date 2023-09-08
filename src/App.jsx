import { useState, useEffect } from 'react'
import _ from 'lodash'
import CardCase from './components/CardCase'
import Pokedex from './pokedex'
import pokeJohto from './assets/pokeJohto.png'
import './App.css'

function App() {
  const [ score, setScore] = useState('0')
  const [ bestScore, setBestScore ] = useState('0')
  const [pokeArray, setPokeArray] = useState(Pokedex)
  const [ memory, setMemory ] = useState([])

  useEffect(() => {
    setPokeArray(_.shuffle(Pokedex))
  }, [])

  function cardClick() {
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
    setScore('0');
    setBestScore(score);
    setPokeArray(_.shuffle(Pokedex));
  }




  return (
    <div className='mainPage'>
    <header>
      <img src={pokeJohto} className='logo' />
      <div className='scoreBox'>
        <p className='scores'>{score}</p>
        <p className='scores'>{bestScore}</p>
      </div>
    </header>
     <CardCase pokemon={pokeArray} clickHandler={cardClick}/>
    </div>
  )
}

export default App
