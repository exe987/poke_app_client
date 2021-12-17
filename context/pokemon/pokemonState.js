import React, { createContext, useState, useContext } from 'react';
import clientAxios from '../../config/clientAxios';
import Swal from 'sweetalert2';

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  const showAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Try again',
      text: 'Something went wrong!',
    });
  };

  //POKEMONS HOME
  const getPokemons = async () => {
    setLoading(true);
    try {
      const response = await clientAxios.get('/api/pokemons/');
      setPokemons(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error();
      setLoading(false);
      window.location.href = '/500';
    }
  };

  //POKEMON DETAIL
  const getPokemon = async () => {
    setLoading(true);
    const id = await localStorage.getItem('id_pokemon');
    const name = await localStorage.getItem('name_pokemon');
    try {
      if (name) {
        const response = await clientAxios.post(`/api/pokemon/`, { name: name });
        if (response.data.status === 404) {
          window.location.href = '/404';
        }
        setPokemon(response.data);
        setLoading(false);
      } else if (id) {
        const response = await clientAxios.get(`/api/pokemon/${id}`);
        if (response.data.status === 404) {
          return;
        }
        setPokemon(response.data);
        setLoading(false);
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      console.error();
      setLoading(false);
      showAlert();
      window.location.href = '/500';
    }
  };

  const getPokemonById = async (id) => {
    try {
      localStorage.removeItem('id_pokemon');
      localStorage.removeItem('name_pokemon');
      localStorage.setItem('id_pokemon', id);
      window.location.href = '/pokeDetail';
    } catch (error) {
      console.error();
    }
  };

  const getPokemonByName = async (name) => {
    try {
      localStorage.removeItem('id_pokemon');
      localStorage.removeItem('name_pokemon');
      localStorage.setItem('name_pokemon', name);
      window.location.href = '/pokeDetail';
    } catch (error) {
      console.error();
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        error,
        loading,
        pokemons,
        pokemon,
        setError,
        setLoading,
        setPokemons,
        setPokemon,
        getPokemon,
        getPokemons,
        getPokemonById,
        getPokemonByName,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    console.error('Error deploying App Context!!!');
  }
  return context;
};

export default useAppContext;
