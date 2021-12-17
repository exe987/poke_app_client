import React, { useEffect } from 'react';
import PokeCard from './PokeCard';
import useAppContext from '../context/pokemon/pokemonState';
import LoaderApp from './Loader';

const PokeList = () => {
  const { getPokemons, pokemons, loading } = useAppContext();

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      {loading ? <LoaderApp /> : null}
      <div className='columns p-6 is-multiline'>
        {pokemons.map((data, index) => (
          <div className='column is-3' key={data.name}>
            <PokeCard pokemon={data} index={index + 1} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PokeList;
