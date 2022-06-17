import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import Burger from './Burger';
import MenuItem from './MenuItem';
import { routesOrderList } from '../helpers/values';

const Menu = ({ show }) => {
  const router = useRouter();
  const { pathname } = router;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const timeout = 450;

  const onClickCreator = (href) => (e) => {
    e.preventDefault();

    setIsMenuOpen(false);

    if (pathname !== href) setTimeout(() => router.push(href), 950);
  };

  return (
    <>
      <Burger show={show} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <CSSTransition classNames={'menu'} in={isMenuOpen} timeout={timeout}>
        <div className={`menu ${isMenuOpen ? 'menu__active' : ''}`}>
          {routesOrderList.map(({ path, title }) => (
            <MenuItem href={path} title={title} onClick={onClickCreator(path)} />
          ))}
          <span className='menu__tip'>for a quick seach just start typing ...</span>
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
