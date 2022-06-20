import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PageLoader = ({ onEntered, active }) => {
  const timeout = 800;

  const test = () => console.log('fire!');

  return (
    <>
      <CSSTransition
        classNames={'page-loader'}
        timeout={timeout}
        in={active}
        unmountOnExit
        onEntered={onEntered}
      >
        <div className='page-loader' />
      </CSSTransition>
      <div onAnimationIteration={test} An className='testofsomething'></div>
    </>
  );
};

export default PageLoader;
