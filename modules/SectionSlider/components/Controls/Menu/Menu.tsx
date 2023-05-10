import React, { FC, useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './MenuItem';
import { routesOrderList } from '../../../../../helpers/values';
import { useActions, useAppSelector } from '../../../../../store/hooks';
import styles from './styles.module.scss';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

const classNames: CSSTransitionClassNames = {
  enterActive: styles.menu_in_active,
  enterDone: styles.menu_in_done,
};

interface OwnProps {}

type Props = OwnProps;

const Menu: FC<Props> = () => {
  const { set_menu_is_exited } = useActions();

  const { show_menu } = useAppSelector(({ sslider }) => sslider.menu);

  const timeout = 450;

  const onEntered = useCallback(() => {
    set_menu_is_exited(false);
  }, [set_menu_is_exited]);

  const onExited = useCallback(() => {
    set_menu_is_exited(true);
  }, [set_menu_is_exited]);

  return (
    <>
      <CSSTransition
        classNames={classNames}
        in={show_menu}
        timeout={timeout}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div className={`${styles.menu} ${show_menu ? styles.menu_active : ''}`}>
          <div className={styles.list}>
            {routesOrderList.map(({ path, title }) => (
              <MenuItem href={path} title={title} key={path} />
            ))}
            <MenuItem
              href={'/portfolio/flashcards'}
              title={'portfolio flashcards'}
              key={'project flashcards'}
            />
          </div>
          {/* <span className={styles.tip}>for a quick seach just start typing ...</span> */}
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
