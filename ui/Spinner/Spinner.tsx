import React, { FC, useMemo, memo } from 'react';
import styles from './styles.module.scss';

type Props = {
  small?: boolean;
};

const Spinner: FC<Props> = ({ small = false }) => {
  const classNames = useMemo(
    () => [styles.spinner, small ? styles.small : ''].join(' '),
    [small]
  );

  return (
    <div className={classNames}>
      <div className={styles.inner}></div>
    </div>
  );
};

export default memo(Spinner);
