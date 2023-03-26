import React, { FC, MouseEventHandler, ReactNode, useCallback } from 'react';
import { TagType } from '..';

interface OwnProps {
  children: ReactNode;
  value: TagType;
  active?: boolean;
  onClickAction?: (value: TagType) => void;
}

type Props = OwnProps;

const Tag: FC<Props> = ({ children, value, active = false, onClickAction }) => {
  const onClick: MouseEventHandler<HTMLLIElement> = useCallback(() => {
    onClickAction?.(value);
  }, [value, onClickAction]);

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
