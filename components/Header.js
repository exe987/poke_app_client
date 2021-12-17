import React, { useState } from 'react';
import useAppContext from '../context/pokemon/pokemonState';
import Swal from 'sweetalert2';

const Header = () => {
  const { getPokemonByName } = useAppContext();
  const [state, setState] = useState({
    pokemon: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //SUBMIT POKEMON
  const { pokemon } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemon.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Try again',
        text: 'Pókemon name is required!',
      });
      return;
    }
    getPokemonByName(pokemon);
    setState({
      pokemon: '',
    });
  };

  return (
    <nav className='navbar has-background-warning' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <img src='/logo_header.png' alt='logo_poke' width={90} />
        </a>
      </div>
      <div className='navbar-end media-content has-text-centered has-text-centered'>
        <form className='navbar-item has-icons-left' onSubmit={handleSubmit}>
          <input
            className='input is-dark is-small'
            type='text'
            placeholder='Search Pókemon'
            name='pokemon'
            onChange={handleChange}
          />
          <div className='navbar-item'>
            <button type='submit' className='is-small button is-danger'>
              SEARCH
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;
