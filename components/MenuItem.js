import React from 'react';
import { useRouter } from 'next/router';

const MenuItem = ({ href, title, onClick }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <a
      className={`menu__link ${pathname === href ? 'menu__link--active' : ''}`}
      href={href}
      title={title}
      onClick={onClick}
    >
      <span>{title}</span>
    </a>
  );
};

export default MenuItem;
