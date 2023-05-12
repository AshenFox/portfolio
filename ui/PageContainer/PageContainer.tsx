import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

const PageContainer: FC<Props> = ({ children }) => {
  return <div className={styles.page_container}>{children}</div>;
};

export default PageContainer;
