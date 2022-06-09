import React from 'react';
import { useRouter } from 'next/router';
import { getPath } from '../helpers/functions';
import { CSSTransition } from 'react-transition-group';

const Arrows = ({ onExited, active }) => {
  const router = useRouter();
  const { pathname } = router;

  const onClickNext = () => router.push(getPath(pathname, 1));

  const onClickPrev = () => router.push(getPath(pathname, -1));

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
          <button onClick={onClickNext}>Next</button>
        </div>
      </CSSTransition>
      <CSSTransition classNames={'arrow__left'} timeout={timeout} in={active}>
        <div className='arrow__left'>
          <button onClick={onClickPrev}>Prev</button>
        </div>
      </CSSTransition>
    </>
  );
};

export default Arrows;
