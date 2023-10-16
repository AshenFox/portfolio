import React, { FC, memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles.module.scss';

type Props = {
  href: string;
  title: string;
};

const MenuItem: FC<Props> = ({ href, title }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Link href={href} legacyBehavior>
      <a
        className={`${styles.link} ${pathname === href ? styles.link_active : ''}`}
        title={title}
      >
        <span>{title}</span>
      </a>
    </Link>
  );
};

export default memo(MenuItem);
