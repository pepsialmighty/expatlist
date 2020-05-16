import React from 'react';

const Footer = () => {
  const style = {
    color: '#8f8f8f',
    margin: '20px',
  };

  return (
    <div id='footer'>
      <i className='fab fa-twitter icon-footer'></i>
      <i className='fab fa-facebook-f icon-footer'></i>
      <i className='fab fa-instagram icon-footer'></i>
      <i className='far fa-envelope icon-footer'></i>
      <p style={style}>
        <i className='far fa-copyright'></i>Plannr.eu
      </p>
    </div>
  );
};

export default Footer;
