import Spinner from '@ui/Spinner';
import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition';
import { useAppSelector } from '../../../../store/hooks/index';
import { useActions } from '../../../../store/hooks/index';
import styles from './styles.module.scss';

const classNames: CSSTransitionClassNames = {
  exitActive: styles.out_active,
  exitDone: styles.out_done,
};

const ContentLoader: FC = () => {
  const { set_content_loader_isappearing, set_content_loader_isexited } = useActions();

  const {
    content_loader: { is_appearing },
    content_loaded,
  } = useAppSelector(({ sslider }) => sslider);

  const timeouts = {
    appear: 1000,
    enter: 1000,
    exit: 700,
  };

  const onEntered: EnterHandler<HTMLDivElement> = () => {
    set_content_loader_isappearing(false);
  };

  const onExited: ExitHandler<HTMLDivElement> = () => {
    set_content_loader_isexited(true);
  };

  return (
    <CSSTransition
      classNames={classNames}
      timeout={timeouts}
      in={is_appearing ? true : !content_loaded}
      appear
      onEntered={onEntered}
      onExited={onExited}
    >
      <div className={styles.content_loader}>
        <Spinner />
      </div>
    </CSSTransition>
  );
};

export default ContentLoader;
