import PropTypes from "prop-types";
import { useState } from "react";

function PokemonCard(props) {
  const {pokemon} = props;

    return (
    <figure>
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
    )
  }

 PokemonCard.propTypes = {
     pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,

 }
  
  export default PokemonCard