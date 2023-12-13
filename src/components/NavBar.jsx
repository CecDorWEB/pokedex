import PropTypes from "prop-types";
import { useState } from "react";
    
function NavBar ({setPokemonIndex, pokemonIndex, pokemonList}) {
    const handleNextClick = () => {
      setPokemonIndex(pokemonIndex +1)
    }
    const handleBeforeClick = () => {
      setPokemonIndex(pokemonIndex -1)
    }

    return (
        <div>
        {pokemonIndex > 0 && <button onClick={handleBeforeClick}>Before</button>}
        {pokemonIndex < pokemonList.length -1 && <button onClick={handleNextClick}>Next</button>}
        </div>
         )
   }

export default NavBar