import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Burger = ({ active }) => {
  const [stageOne, setStageOne] = useState(false);
  const [stageTwo, setStageTwo] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);

      if (stageOne) {
        setStageTwo(false);

        setTimeout(() => {
          setStageOne(false);
        }, 450);
      } else {
        setStageOne(true);

        setTimeout(() => {
          setStageTwo(true);
        }, 450);
      }
    }
  };

  useEffect(() => {
    if (stageOne === stageTwo) setIsMenuOpen(false);
  }, [stageOne, stageTwo]);

  return (
    <CSSTransition classNames={'burger'} in={active} timeout={950}>
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
