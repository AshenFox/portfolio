import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  href?: string;
  classStr?: string;
  title?: string;
  thin?: boolean;
};

const FancyLink: FC<Props> = ({
  children,
  href = '',
  classStr = '',
  title = '',
  thin,
}) => {
  return (
    <Link href={href}>
      <a title={title}>
        <span className={`${styles.fancy_link} ${classStr}`}>
          <span className={`${styles.text} ${thin ? styles.thin : ''}`}>{children}</span>
        </span>
      </a>
    </Link>
  );
};

export default FancyLink;
