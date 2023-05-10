import React, { AnimationEventHandler, FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { useAppSelector } from '../../../../store/hooks';
import styles from './styles.module.scss';

const classNames: CSSTransitionClassNames = {
  enterDone: styles.section_loader_in_done,
  exitDone: styles.section_loader_out_done,
};

interface OwnProps {
  onAnimationIteration: AnimationEventHandler<HTMLDivElement>;
}

type Props = OwnProps;

const SectionLoader: FC<Props> = ({ onAnimationIteration }) => {
  const { show_section_loader } = useAppSelector(({ sslider }) => sslider);

  const timeout = 0;

  return (
    <>
      <CSSTransition classNames={classNames} timeout={timeout} in={show_section_loader}>
        <div
          className={styles.section_loader}
          onAnimationIteration={onAnimationIteration}
        />
      </CSSTransition>
    </>
  );
};

export default SectionLoader;
