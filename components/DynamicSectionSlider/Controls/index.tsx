import React, { FC, MouseEventHandler } from 'react';
import Menu from './Menu';
import Arrows from './Arrows';
import Burger from './Burger';
import { ExitHandler } from 'react-transition-group/Transition';

interface OwnProps {
  showNavigation: boolean;
  showMenu: boolean;
  onBurgerClick: MouseEventHandler<HTMLDivElement>;
  onMenuExited: ExitHandler<HTMLDivElement>;
  onArrowExited: ExitHandler<HTMLDivElement>;
}

type Props = OwnProps;

const Controls: FC<Props> = ({
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
      <Menu showMenu={showMenu} />
      <Arrows onExited={onArrowExited} showNavigation={showNavigation} />
    </>
  );
};

export default Controls;
