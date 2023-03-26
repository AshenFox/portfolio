import React, { FC, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './MenuItem';
import { routesOrderList } from '../../../../../helpers/values';
import { useActions, useAppSelector } from '../../../../../store/hooks';

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
        classNames={'menu'}
        in={show_menu}
        timeout={timeout}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div className={`menu ${show_menu ? 'menu__active' : ''}`}>
          <div className='menu__list'>
            {routesOrderList.map(({ path, title }) => (
              <MenuItem href={path} title={title} key={path} />
            ))}
            <MenuItem
              href={'/portfolio/flashcards'}
              title={'portfolio flashcards'}
              key={'project flashcards'}
            />
          </div>
          {/* <span className='menu__tip'>for a quick seach just start typing ...</span> */}
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
