import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Burger = ({ show, isMenuOpen, setIsMenuOpen }) => {
  const [stageOne, setStageOne] = useState(false);
  const [stageTwo, setStageTwo] = useState(false);

  const [isTransition, setIsTransition] = useState(false);

  const transformBurger = (value) => {
    value ? setStageOne(value) : setStageTwo(value);

    setTimeout(() => {
      value ? setStageTwo(value) : setStageOne(value);
    }, 450);
  };

  const onClick = () => {
    if (!isTransition) {
      setIsTransition(true);

      if (isMenuOpen) {
        setIsMenuOpen(false);

        transformBurger(false);
      } else {
        setIsMenuOpen(true);

        transformBurger(true);
      }
    }
  };

  useEffect(() => {
    if (stageOne === stageTwo) setIsTransition(false);
  }, [stageOne, stageTwo]);

  useEffect(() => {
    if (!isTransition && !isMenuOpen) transformBurger(false);
  }, [isMenuOpen]);

  return (
    <CSSTransition classNames={'burger'} in={show} timeout={950}>
      <div
        className={`burger ${stageOne ? 'burger__st1' : ''} ${
          stageTwo ? 'burger__st2' : ''
        }`}
        onClick={onClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </CSSTransition>
  );
};

export default Burger;
