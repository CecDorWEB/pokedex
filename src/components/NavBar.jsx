import PropTypes from "prop-types";
import { useState } from "react";
    
function NavBar ({setPokemonIndex, pokemonIndex, pokemonList}) {
   /* const handleNextClick = () => {
      setPokemonIndex(pokemonIndex +1)
    }
    const handleBeforeClick = () => {
      setPokemonIndex(pokemonIndex -1)
    }
    */

    const handleButton = (index) => {
      setPokemonIndex(index);
      if (index==3) {
        alert("pika pikachu !!!");
      }
    }
    
        return (
            /*<div>
              {pokemonList.map((poke)=> (
                <button 
                key={poke.name}
                name={poke.name}> 
                  </button>
              ))}
            </div>*/
            <div >
              {pokemonList.map((pokemon, index)=>(
                <button className="pokeButton"
                key={pokemon.name} 
                onClick={() => handleButton(index)}>
                  {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</button>
              )
              )}
            </div>
            
        );

        /*<div>
        {pokemonIndex > 0 && <button onClick={handleBeforeClick}>Before</button>}
        {pokemonIndex < pokemonList.length -1 && <button onClick={handleNextClick}>Next</button>}
        </div>
         )*/

   }

export default NavBar