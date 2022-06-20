import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Burger = ({ showNavigation, showMenu, onClick, onExited }) => {
  return (
    <CSSTransition classNames={'burger'} in={showNavigation} timeout={950}>
      <CSSTransition
        classNames={'burger__toggle'}
        in={showMenu}
        timeout={1000}
        onExited={onExited}
      >
        <div className={`burger`} onClick={onClick}>
          <div />
          <div />
          <div />
        </div>
      </CSSTransition>
    </CSSTransition>
  );
};

export default Burger;
