import React, { FC, MouseEventHandler } from 'react';
import Menu from './Menu';
import Arrows from './Arrows';
import Burger from './Burger';
import { ExitHandler } from 'react-transition-group/Transition';
import UpperLevelLink from './UpperLevelLink/UpperLevelLink';

type Props = {
  onBurgerExited: ExitHandler<HTMLDivElement>;
  onArrowExited: ExitHandler<HTMLDivElement>;
};

const Controls: FC<Props> = ({ onBurgerExited, onArrowExited }) => {
  return (
    <>
      <Burger onExited={onBurgerExited} />
      <Menu />
      <Arrows onExited={onArrowExited} />
      <UpperLevelLink />
    </>
  );
};

export default Controls;
