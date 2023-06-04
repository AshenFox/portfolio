import React, { FC, MouseEventHandler, ReactNode, useCallback } from 'react';
import { TagName } from '../../../Filter';
import styles from '../styles.module.scss';

type Props = {
  children: ReactNode;
  value: TagName;
  active?: boolean;
  onClickAction?: (value: TagName) => void;
};

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
