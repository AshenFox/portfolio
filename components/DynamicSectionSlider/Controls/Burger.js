import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Burger = ({ showNavigation, showMenu, onClick, onExited }) => {
  const burgerTimeout = 950;
  const burgerToggleTimeouts = {
    appear: 1000,
    enter: 1000,
    exit: 750,
  };

  return (
    <div className='burger__container'>
      <CSSTransition
        classNames={'burger'}
        in={showNavigation}
        timeout={burgerTimeout}
        appear
      >
        <CSSTransition
          classNames={'burger__toggle'}
          in={showMenu}
          timeout={burgerToggleTimeouts}
          onExited={onExited}
        >
          <div className={`burger`} onClick={onClick}>
            <div />
            <div />
            <div />
          </div>
        </CSSTransition>
      </CSSTransition>
      <div className='burger__click' onClick={onClick}></div>
    </div>
  );
};

export default Burger;
