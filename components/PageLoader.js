import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PageLoader = ({ onAnimationIteration, active }) => {
  return (
    <>
      <CSSTransition classNames={'page-loader'} timeout={0} in={active}>
        <div className='page-loader' onAnimationIteration={onAnimationIteration} />
      </CSSTransition>
    </>
  );
};

export default PageLoader;
