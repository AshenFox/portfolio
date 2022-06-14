import React from 'react';

const Button = ({ isClicked }) => {
  return (
    <div className={`button ${isClicked ? 'button__click' : ''}`}>
      <div className='button__left'></div>
      <div className='button__middle'></div>
      <div className='button__right'></div>
      <div className='button__text'>DESTROY THIS WEBPAGE</div>
      <div className='button__background'></div>
      <div className='button__shadow'></div>
    </div>
  );
};

export default Button;
