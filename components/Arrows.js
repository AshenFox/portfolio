import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPath } from '../helpers/functions';
import { CSSTransition } from 'react-transition-group';

const Arrows = ({ onExited, active }) => {
  const router = useRouter();
  const { pathname } = router;

  /* const [value, setValue] = useState(false); */

  const timeout = 500;
  return (
    <>
      <CSSTransition
        classNames={'arrow__right'}
        in={active}
        timeout={timeout}
        onExited={onExited}
      >
        <div className='arrow__right'>
          <Link href={getPath(pathname, 1)}>
            <a className='arrow__link' />
          </Link>
          <span className='arrow__text'>next</span>
          <div className='arrow__arrow' />
        </div>
      </CSSTransition>
      <CSSTransition classNames={'arrow__left'} timeout={timeout} in={active}>
        <div className='arrow__left'>
          <Link href={getPath(pathname, -1)}>
            <a className='arrow__link' />
          </Link>
          <div className='arrow__arrow' />
          <span className='arrow__text'>prev</span>
        </div>
      </CSSTransition>
    </>
  );
};

export default Arrows;
