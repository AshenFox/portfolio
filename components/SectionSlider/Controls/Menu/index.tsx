import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './MenuItem';
import { routesOrderList } from '../../../../helpers/values';
import { useAppSelector } from '../../../../store/hooks';

interface OwnProps {}

type Props = OwnProps;

const Menu: FC<Props> = () => {
  const { show_menu } = useAppSelector(({ sslider }) => sslider);

  const timeout = 450;

  return (
    <>
      <CSSTransition classNames={'menu'} in={show_menu} timeout={timeout}>
        <div className={`menu ${show_menu ? 'menu__active' : ''}`}>
          {routesOrderList.map(({ path, title }) => (
            <MenuItem href={path} title={title} key={path} />
          ))}
          <MenuItem
            href={'/portfolio/flashcards'}
            title={'portfolio flashcards'}
            key={'project flashcards'}
          />
          <span className='menu__tip'>for a quick seach just start typing ...</span>
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
