import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface OwnProps {
  href: string;
  title: string;
}

type Props = OwnProps;

const MenuItem: FC<Props> = ({ href, title }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Link href={href}>
      <a
        className={`${styles.link} ${pathname === href ? styles.link_active : ''}`}
        title={title}
      >
        <span>{title}</span>
      </a>
    </Link>
  );
};

export default MenuItem;
