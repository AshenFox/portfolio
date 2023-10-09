import React, { FC, MouseEventHandler, ReactNode, useCallback, memo } from 'react';
import { TagValue, TagID } from '../../../content';
import styles from '../styles.module.scss';

type Props = {
  children: ReactNode;
  value: TagID;
  active?: boolean;
  onClickAction?: (value: TagID) => void;
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

export default memo(Tag);
