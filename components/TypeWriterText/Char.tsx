import React, { FC } from 'react';

interface OwnProps {
  active: boolean;
  children: string;
}

type Props = OwnProps;

const Char: FC<Props> = ({ active, children }) => {
  return <span className={`about__char ${active ? 'active' : ''}`}>{children}</span>;
};

export default Char;
