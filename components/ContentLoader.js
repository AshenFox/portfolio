import React from 'react';
import { CSSTransition } from 'react-transition-group';

const ContentLoader = ({ isLoaded, isAppearing, onEntered, onExited }) => {
  const timeouts = {
    appear: 1000,
    enter: 1000,
    exit: 700,
  };

  return (
    <CSSTransition
      classNames={'content-loader'}
      timeout={timeouts}
      in={isAppearing ? true : !isLoaded}
      appear
      onEntered={onEntered}
      onExited={onExited}
    >
      <div className='content-loader'>
        <div className='content-loader__spinner-container'>
          <div className='content-loader__spinner'></div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ContentLoader;
