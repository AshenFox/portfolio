import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  centered?: boolean;
};

const PageContainer: FC<Props> = ({ children, centered = false }) => {
  return (
    <div className={[styles.page_container, centered ? styles.centered : ''].join(' ')}>
      {children}
    </div>
  );
};

export default PageContainer;
