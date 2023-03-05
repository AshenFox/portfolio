import React, { FC, MouseEventHandler, useCallback, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ExitHandler } from 'react-transition-group/Transition';
import { useActions, useAppSelector } from '../../../store/hooks';

interface OwnProps {
  onExited: ExitHandler<HTMLDivElement>;
}

type Props = OwnProps;

const Burger: FC<Props> = ({ onExited }) => {
  const { set_show_menu } = useActions();

  const {
    content_loader: { is_exited },
    show_menu,
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const onClick: MouseEventHandler<HTMLDivElement> = e => {
    set_show_menu(!show_menu);
  };

  const onContainerClick: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const burgerTimeout = 950;
  const burgerToggleTimeouts = useMemo(
    () => ({
      appear: 1000,
      enter: 1000,
      exit: 750,
    }),
    []
  );

  return (
    <CSSTransition
      classNames={'burger'}
      in={show_navigation && is_exited}
      timeout={burgerTimeout}
      appear
    >
      <div className='burger__container' onClick={onContainerClick}>
        <CSSTransition
          classNames={'burger__toggle'}
          in={show_menu}
          timeout={burgerToggleTimeouts}
          onExited={onExited}
        >
          <div className={`burger`} onClick={onClick}>
            <div className='burger__bar' />
            <div className='burger__bar' />
            <div className='burger__bar' />
          </div>
        </CSSTransition>
        <div className='burger__click' onClick={onClick}></div>
      </div>
    </CSSTransition>
  );
};

export default Burger;
