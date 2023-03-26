import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
        className={`menu__link ${pathname === href ? 'menu__link--active' : ''}`}
        title={title}
      >
        <span>{title}</span>
      </a>
    </Link>
  );
};

export default MenuItem;
