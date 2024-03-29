import Image from 'next/image';
import React, { FC, useState, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import Icons from '@ui/Icons';
import Spinner from '@ui/Spinner';
import styles from './styles.module.scss';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

export const SliderItemClassNames: CSSTransitionClassNames = {
  enter: styles.item_in,
  enterActive: styles.item_in_active,
  enterDone: styles.item_in_done,
};

const LoaderClassNames: CSSTransitionClassNames = {
  enterActive: styles.loader_in_active,
  enterDone: styles.loader_in_done,
  exitActive: styles.loader_out_active,
  exitDone: styles.loader_out_done,
};

type Props = {
  data: {
    path: string;
    alt: string;
  };
  dir: 'right' | 'left';
};

const SliderItem: FC<Props> = ({ data, dir }) => {
  const { path, alt } = data;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const onError = () => {
    setIsError(true);
  };
  const onLoad = () => {
    setIsLoaded(true);
  };

  const Icon = Icons['brokenimage'];

  return (
    <div className={`${styles.item} ${styles[dir]}`}>
      <CSSTransition
        classNames={LoaderClassNames}
        in={!isLoaded || isError}
        timeout={250}
      >
        <div className={styles.loader}>{isError ? <Icon /> : <Spinner small />}</div>
      </CSSTransition>
      <img
        src={path ?? ''}
        alt={alt}
        draggable={false}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
};

export default memo(SliderItem);
