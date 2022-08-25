import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface OwnProps {
  children: ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

type Props = OwnProps;

const Tag: FC<Props> = ({ children, active = false, onClick }) => {
  return (
    <li
      className={`filter__tag ${active ? 'filter__tag--active' : ''}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </li>
  );
};

export default Tag;
