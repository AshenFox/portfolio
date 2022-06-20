import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import Burger from './Burger';
import MenuItem from './MenuItem';
import { routesOrderList } from '../helpers/values';

const Menu = ({ showNavigation, showMenu, onBurgerClick, onExited }) => {
  const timeout = 450;

  return (
    <>
      <Burger
        showNavigation={showNavigation}
        showMenu={showMenu}
        onClick={onBurgerClick}
        onExited={onExited}
      />
      <CSSTransition classNames={'menu'} in={showMenu} timeout={timeout}>
        <div className={`menu ${showMenu ? 'menu__active' : ''}`}>
          {routesOrderList.map(({ path, title }) => (
            <MenuItem href={path} title={title} />
          ))}
          <span className='menu__tip'>for a quick seach just start typing ...</span>
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
