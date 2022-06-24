import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const ContentLoader = ({ isLoaded, isAppearing, onEntered }) => {
  return (
    <CSSTransition
      classNames={'content-loader'}
      timeout={1000}
      in={isAppearing ? true : !isLoaded}
      appear
      onEntered={onEntered}
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
