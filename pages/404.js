import React from 'react';
import Layout from '../components/Layout';

const PageError = () => {
  return (
    <Layout>
      <div className='has-background-black page_error'>
        <h1 className='title is-5 has-text-warning'>OOPS! TRY AGAIN POKEMON DOES NOT EXIST</h1>
        <a href='/' className='is-large button is-warning'>
          BACK HOME
        </a>
        <h3 className='title is-1 has-text-warning'>:(</h3>
      </div>
    </Layout>
  );
};

export default PageError;
