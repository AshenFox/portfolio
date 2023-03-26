import React, { AnimationEventHandler, FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAppSelector } from '../../../store/hooks';

interface OwnProps {
  onAnimationIteration: AnimationEventHandler<HTMLDivElement>;
}

type Props = OwnProps;

const SectionLoader: FC<Props> = ({ onAnimationIteration }) => {
  const { show_section_loader } = useAppSelector(({ sslider }) => sslider);

  const timeout = 0;

  return (
    <>
      <CSSTransition
        classNames={'section-loader'}
        timeout={timeout}
        in={show_section_loader}
      >
        <div className='section-loader' onAnimationIteration={onAnimationIteration} />
      </CSSTransition>
    </>
  );
};

export default SectionLoader;
