/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard";
import '../styles/_CardCase.css';

export default function CardCase({pokemon, clickHandler}) {
    return (
        <div className="cardCase">
          {pokemon.map((poke) => {
            return (
                <PokemonCard key={poke} num={poke} handler={clickHandler} />
            )
          })}    

        </div>
    )
}