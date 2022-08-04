import React from 'react';
import Link from 'next/link';

const FancyLink = ({ children, href = '', classStr = '', title }) => {
  return (
    <Link href={href}>
      <a title={title}>
        <span className={`fancy-link ${classStr}`}>
          <span className='fancy-link__text'>{children}</span>
        </span>
      </a>
    </Link>
  );
};

// add link copy functionality

export default FancyLink;
