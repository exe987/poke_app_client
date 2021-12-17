import React from 'react';
import useAppContext from '../context/pokemon/pokemonState';

const PokeCard = ({ pokemon, index }) => {
  const { getPokemonById } = useAppContext();

  return (
    <a className='card is-clickable' onClick={() => getPokemonById(index)} href='/pokeDetail'>
      <div className='carta-box'>
        <div className='card-image has-text-centered has-background-grey-light carta'>
          <figure className='image is-128x128 is-inline-block'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
              alt={`poke-img-${index}`}
              width={50}
              height={50}
            />
          </figure>
        </div>
        <div className='card-content has-background-danger'>
          <div className='media'>
            <div className='media-content has-text-centered'>
              <p className='title is-5 capitalize  has-text-white'>{pokemon.name}</p>
              <p className='subtitle is-6 has-text-white'>### {index}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PokeCard;
