import React from 'react';
import Layout from '../components/Layout';

const PageErrorServer = () => {
  return (
    <Layout>
      <div className='has-background-black page_error'>
        <h1 className='title is-2 has-text-warning'>OOPS! SERVER ERROR</h1>
        <a href='/' className='is-large button is-warning'>
          BACK HOME
        </a>
        <h3 className='title is-1 has-text-warning'>TRY AGAIN :(</h3>
      </div>
    </Layout>
  );
};

export default PageErrorServer;
