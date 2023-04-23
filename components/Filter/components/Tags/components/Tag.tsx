import React, { FC, MouseEventHandler, ReactNode, useCallback } from 'react';
import { TagType } from '../../../Filter';
import styles from '../styles.module.scss';

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
    <li className={`${styles.tag} ${active ? styles.tag_active : ''}`} onClick={onClick}>
      <span>{children}</span>
    </li>
  );
};

export default Tag;
