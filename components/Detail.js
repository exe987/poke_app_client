import React, { useEffect } from 'react';
import useAppContext from '../context/pokemon/pokemonState';
import LoaderApp from './Loader';

const Detail = () => {
  const { getPokemon, pokemon, loading, getPokemonById } = useAppContext();

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      {loading ? (
        <LoaderApp />
      ) : (
        <div className='detail'>
          <div className='card-detail has-background-danger has-text-white'>
            <div className='card-detail-img has-background-light'>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={`poke-img-${pokemon.id}`}
                width={150}
                height={50}
              />
            </div>
            <div className='card-detail-info'>
              <h3 className='has-text-centered title is-3 mayus has-text-white'>
                {pokemon.name} <span className='title is-4 has-text-white '>### {pokemon.id}</span>
              </h3>
              <div className='card-detail-info-poke'>
                <div className='card-detail-info-poke-up'>
                  <p>
                    {' '}
                    Height: <strong className='has-text-white'>{pokemon.height}"</strong>{' '}
                  </p>
                  <div className='card-detail-info-poke-down'>
                    <p>
                      {' '}
                      Weight: <strong className='has-text-white'>{pokemon.weight/10} Kg</strong>{' '}
                    </p>
                  </div>
                </div>
                <div className='card-detail-info-poke-up'>
                  <p>
                    {' '}
                    Type: <strong className='has-background-warning p-1 is-rounded mayus'>{pokemon.type}</strong>{' '}
                  </p>
                  <div className=''>
                    Abilities: <strong className='mayus has-text-white'>{pokemon.ability}</strong>{' '}
                  </div>
                  <div className='card-detail-info-poke-down'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='buttons has-addons '>
            <button className='button is-danger' onClick={pokemon.id > 1 ? () => getPokemonById(pokemon.id - 1) : null}>
              <i className='fas fa-fast-backward'></i>
            </button>
            <a className='button is-warning has-text-weight-medium' href='/'>
              BACK HOME
            </a>
            <button
              className='button is-danger'
              onClick={pokemon.id < 150 ? () => getPokemonById(pokemon.id + 1) : null}>
              <i className='fas fa-fast-forward'></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
