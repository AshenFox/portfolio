import React from 'react';
import Icons from './icons';
import Link from 'next/link';

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
  onClick = () => {},
  isClicked,
  isBig = false,
  isActive = true,
  color = '',
  icon = false,
  href = '',
  title = '',
}) => {
  const Icon = Icons[icon];

  return (
    <Link href={href}>
      <button
        className={`button ${isClicked && isActive ? 'button__click' : ''} ${color} ${
          isBig ? 'big' : ''
        } ${!children && icon ? 'onlyicon' : ''} ${isActive ? '' : 'inactive'}`}
        onClick={onClick}
      >
        <a title={title}>
          <div className='button__left'></div>
          <div className='button__middle'></div>
          <div className='button__right'></div>
          <div className='button__content'>
            {icon && <Icon />}
            {children && <span className='button__text'>{children}</span>}
          </div>
          <div className='button__background'></div>
          <div className='button__shadow'></div>
        </a>
      </button>
    </Link>
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
