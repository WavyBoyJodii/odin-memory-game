/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";


export default function PokemonCard({num, handler}){
    const [poke, setPoke] = useState(null)

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/` + `${num}`)
      .then(res => {setPoke(res.data);
    console.log(res.data)})
      .catch(err => console.log(err))    
    }, [])


    return(
      <div value={num} onClick={handler}>
        {poke && <img src={poke.sprites.front_default} alt="pokemon" />}
        {poke && <p>{poke.name}</p>}
      </div> 
    )
}