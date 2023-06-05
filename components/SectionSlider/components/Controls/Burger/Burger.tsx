import React, { FC, MouseEventHandler, useCallback, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { ExitHandler } from 'react-transition-group/Transition';
import { useActions, useAppSelector } from '@store/hooks';
import styles from './styles.module.scss';

const burgerClassNames: CSSTransitionClassNames = {
  appear: styles.in,
  enter: styles.in,
  exit: styles.out,
  exitActive: styles.out_active,
  exitDone: styles.out_done,
  enterActive: styles.in_active,
  enterDone: styles.in_done,
  appearActive: styles.in_active,
  appearDone: styles.in_done,
};

const burgerToggleClassNames: CSSTransitionClassNames = {
  appear: styles.toggle_in,
  enter: styles.toggle_in,
  exit: styles.toggle_out,
  exitActive: styles.toggle_out_active,
  exitDone: styles.toggle_out_done,
  enterActive: styles.toggle_in_active,
  enterDone: styles.toggle_in_done,
  appearActive: styles.toggle_in_active,
  appearDone: styles.toggle_in_done,
};

type Props = {
  onExited: ExitHandler<HTMLDivElement>;
};

const Burger: FC<Props> = ({ onExited }) => {
  const { set_show_menu } = useActions();

  const {
    content_loader: { is_exited },
    menu: { show_menu },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const canOpenMenu = show_navigation && is_exited;

  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(
    e => {
      if (canOpenMenu) {
        set_show_menu(!show_menu);
      }
    },
    [set_show_menu, show_menu, canOpenMenu]
  );

  const onContainerClick: MouseEventHandler<HTMLDivElement> = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

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
      classNames={burgerClassNames}
      in={canOpenMenu}
      timeout={burgerTimeout}
      appear
    >
      <div className={styles.container} onClick={onContainerClick}>
        <CSSTransition
          classNames={burgerToggleClassNames}
          in={show_menu}
          timeout={burgerToggleTimeouts}
          onExited={onExited}
        >
          <div className={styles.burger} onClick={onClick}>
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
          </div>
        </CSSTransition>
        <div className={styles.click} onClick={onClick}></div>
      </div>
    </CSSTransition>
  );
};

export default Burger;
