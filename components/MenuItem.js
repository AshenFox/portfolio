import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuItem = ({ href, title }) => {
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
