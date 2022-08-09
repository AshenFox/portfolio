import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

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
        <span className={`fancy-link ${classStr}`}>
          <span className='fancy-link__text'>{children}</span>
        </span>
      </a>
    </Link>
  );
};

// add link copy functionality

export default FancyLink;
