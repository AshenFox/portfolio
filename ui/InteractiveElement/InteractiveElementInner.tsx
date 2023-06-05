import React, { FC, ReactNode } from 'react';
import Icons from '@ui/Icons';
import { IconName } from './types';
import styles from './styles.module.scss';

type Props = {
  icon?: IconName;
  children?: ReactNode;
};

const InteractiveElementInner: FC<Props> = ({ icon, children }) => {
  const Icon = Icons[icon];

  return (
    <>
      <div className={styles.left}></div>
      <div className={styles.middle}></div>
      <div className={styles.right}></div>
      <div className={styles.content}>
        {icon && <Icon />}
        {children && <span className={styles.text}>{children}</span>}
      </div>
      <div className={styles.background}></div>
      <div className={styles.shadow}></div>
    </>
  );
};

export default InteractiveElementInner;
