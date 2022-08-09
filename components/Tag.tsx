import React, { FC, ReactNode } from 'react';

interface OwnProps {
  children: ReactNode;
  active?: boolean;
}

type Props = OwnProps;

const Tag: FC<Props> = ({ children, active = false }) => {
  return (
    <li className={`portfolio__tag ${active ? 'portfolio__tag--active' : ''}`}>
      <span>{children}</span>
    </li>
  );
};

export default Tag;
