import React, { AnimationEventHandler, FC } from 'react';
import { CSSTransition } from 'react-transition-group';

interface OwnProps {
  onAnimationIteration: AnimationEventHandler<HTMLDivElement>;
  active: boolean;
}

type Props = OwnProps;

const PageLoader: FC<Props> = ({ onAnimationIteration, active }) => {
  const timeout = 0;

  return (
    <>
      <CSSTransition classNames={'page-loader'} timeout={timeout} in={active}>
        <div className='page-loader' onAnimationIteration={onAnimationIteration} />
      </CSSTransition>
    </>
  );
};

export default PageLoader;
