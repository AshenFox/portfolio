import React, { FC, MouseEventHandler, ReactNode, useCallback } from 'react';
import { TTag } from '../../../Filter';
import styles from '../styles.module.scss';

interface OwnProps {
  children: ReactNode;
  value: TTag;
  active?: boolean;
  onClickAction?: (value: TTag) => void;
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
