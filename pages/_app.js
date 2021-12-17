import '../styles/globals.css';
import Head from 'next/head';
import { PokemonProvider } from '../context/pokemon/pokemonState';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokeApp</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css' />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </>
  );
}

export default MyApp;
