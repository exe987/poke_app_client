import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className='layout has-background-grey'>{props.children}</div>
      <button onClick={() => window.scroll(0, 0)} className='btn-flotante'>
        <i className='fas fa-arrow-up'></i>
      </button>
      <Footer />
    </>
  );
};

export default Layout;
