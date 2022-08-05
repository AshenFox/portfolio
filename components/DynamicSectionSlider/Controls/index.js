import React from 'react';
import Menu from './Menu';
import Arrows from './Arrows';
import Burger from './Burger';

const Controls = ({
  showNavigation,
  showMenu,
  onBurgerClick,
  onMenuExited,
  onArrowExited,
}) => {
  return (
    <>
      <Burger
        showNavigation={showNavigation}
        showMenu={showMenu}
        onClick={onBurgerClick}
        onExited={onMenuExited}
      />
      <Menu
        showNavigation={showNavigation}
        showMenu={showMenu}
        onBurgerClick={onBurgerClick}
        onExited={onMenuExited}
      />
      <Arrows onExited={onArrowExited} showNavigation={showNavigation} />
    </>
  );
};

export default Controls;
