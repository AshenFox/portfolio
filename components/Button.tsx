import React, { FC, forwardRef, MouseEventHandler, ReactNode } from 'react';
import Icons from './Icons';
import Link from 'next/link';

type ColorType = 'red' | 'green' | 'skyblue' | 'blue' | 'green' | 'grey';
type TIcon = 'googleplus' | 'facebook' | 'twitter' | 'externallink' | 'github' | '';

interface OwnProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isClicked?: boolean;
  isBig?: boolean;
  isActive?: boolean;
  color?: ColorType;
  icon?: TIcon;
  href?: string;
  title?: string;
  classStr?: string;
}

type Props = OwnProps;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      onClick = () => {},
      isClicked = false,
      isBig = false,
      isActive = true,
      color = 'red',
      icon = '',
      href = '',
      title = '',
      classStr = '',
    },
    ref
  ) => {
    const Icon = Icons[icon];

    return (
      <Link href={href}>
        <button
          className={`button ${isClicked && isActive ? 'button__click' : ''} ${color} ${
            isBig ? 'big' : ''
          } ${!children && icon ? 'onlyicon' : ''} ${
            isActive ? '' : 'inactive'
          } ${classStr}`}
          onClick={isActive ? onClick : () => {}}
          ref={ref}
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
  }
);

Button.displayName = 'Button';

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
