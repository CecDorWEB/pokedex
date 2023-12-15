import PropTypes from "prop-types";

function PokemonCard(props) {
  const {pokemon} = props;

    return (
    <figure className="card">
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
      <figcaption>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</figcaption>
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