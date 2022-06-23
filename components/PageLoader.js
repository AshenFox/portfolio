import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PageLoader = ({ onAnimationIteration, active }) => {
  const timeout = 800;

  return (
    <>
      <CSSTransition
        classNames={'page-loader'}
        /* timeout={timeout} */
        in={active}
      >
        <div className='page-loader' onAnimationIteration={onAnimationIteration} />
      </CSSTransition>
    </>
  );
};

export default PageLoader;
