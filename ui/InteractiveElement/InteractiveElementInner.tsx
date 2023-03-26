import React, { FC, ReactNode } from 'react';
import Icons from '@ui/Icons';
import { TIcon } from '../../components/types';
import styles from './styles.module.scss';

type InteractiveElementInnerProps = {
  icon?: TIcon;
  children?: ReactNode;
};

const InteractiveElementInner: FC<InteractiveElementInnerProps> = ({
  icon,
  children,
}) => {
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
