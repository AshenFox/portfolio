import React from 'react';

// red
// green
// skyblue
// blue
// grey

const Button = ({ isClicked }) => {
  return (
    <div className={`button ${isClicked ? 'button__click' : ''} grey`}>
      <div className='button__left'></div>
      <div className='button__middle'></div>
      <div className='button__right'></div>
      <div className='button__content'>
        <div className='button__icon'></div>
        <span className='button__text'>DESTROY THIS WEBPAGE</span>
      </div>
      <div className='button__background'></div>
      <div className='button__shadow'></div>
    </div>
  );
};

export default Button;
