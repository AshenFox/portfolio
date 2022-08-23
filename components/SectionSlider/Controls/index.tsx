import React, { FC, MouseEventHandler } from 'react';
import Menu from './Menu';
import Arrows from './Arrows';
import Burger from './Burger';
import { ExitHandler } from 'react-transition-group/Transition';

interface OwnProps {
  onBurgerExited: ExitHandler<HTMLDivElement>;
  onArrowExited: ExitHandler<HTMLDivElement>;
}

type Props = OwnProps;

const Controls: FC<Props> = ({ onBurgerExited, onArrowExited }) => {
  return (
    <>
      <Burger onExited={onBurgerExited} />
      <Menu />
      {/* <Arrows onExited={onArrowExited} /> */}
    </>
  );
};

export default Controls;
