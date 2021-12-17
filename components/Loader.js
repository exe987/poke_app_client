import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderApp = () => {
  return (
    <div className='loader_app'>
      <Loader type='Puff' color='hsl(348, 100%, 61%)' height={100} width={100} />
    </div>
  );
};

export default LoaderApp;
