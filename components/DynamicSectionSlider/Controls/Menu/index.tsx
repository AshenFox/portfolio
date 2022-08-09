import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './MenuItem';
import { routesOrderList } from '../../../../helpers/values';

interface OwnProps {
  showMenu: boolean;
}

type Props = OwnProps;

const Menu: FC<Props> = ({ showMenu }) => {
  const timeout = 450;

  return (
    <>
      <CSSTransition classNames={'menu'} in={showMenu} timeout={timeout}>
        <div className={`menu ${showMenu ? 'menu__active' : ''}`}>
          {routesOrderList.map(({ path, title }) => (
            <MenuItem href={path} title={title} key={path} />
          ))}
          <span className='menu__tip'>for a quick seach just start typing ...</span>
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
