import React from 'react';
import Icons from './icons';

console.log(Icons);

// red
// green
// skyblue
// blue
// grey

// googleplus
// facebook
// twitter
// externallink
// github

const Button = ({
  children,
  isClicked,
  isBig = false,
  color = '',
  icon = false,
  isActive = true,
}) => {
  const Icon = Icons[icon];

  return (
    <div
      className={`button ${isClicked && isActive ? 'button__click' : ''} ${color} ${
        isBig ? 'big' : ''
      } ${!children && icon ? 'onlyicon' : ''} ${isActive ? '' : 'inactive'}`}
    >
      <div className='button__left'></div>
      <div className='button__middle'></div>
      <div className='button__right'></div>
      <div className='button__content'>
        {icon && <Icon />}
        {children && <span className='button__text'>{children}</span>}
      </div>
      <div className='button__background'></div>
      <div className='button__shadow'></div>
    </div>
  );
};

export default Button;

/* 
{icon && (
          <svg>
            <use href={`../svg/sprite.svg#icon__${icon}`} />
          </svg>
        )}

*/
/* {icon && (
          <object
            data={`svg/${icon}.svg`}
            type='image/svg+xml'
            className='button__icon'
          />
        )} */
