import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface OwnProps {
  children: ReactNode;
  href?: string;
  classStr?: string;
  title?: string;
}

type Props = OwnProps;

const FancyLink: FC<Props> = ({ children, href = '', classStr = '', title = '' }) => {
  return (
    <Link href={href}>
      <a title={title}>
        <span className={`${styles.fancy_link} ${classStr}`}>
          <span className={styles.text}>{children}</span>
        </span>
      </a>
    </Link>
  );
};

export default FancyLink;
