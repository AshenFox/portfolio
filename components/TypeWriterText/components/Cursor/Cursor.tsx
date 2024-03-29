import React, { CSSProperties, FC, memo } from 'react';
import { useAppSelector } from '@store/hooks';
import styles from './styles.module.scss';

type Props = {
  isSmall?: boolean;
  isActive?: boolean;
};

const Cursor: FC<Props> = ({ isActive = false, isSmall = false }) => {
  const { x, y } = useAppSelector(({ game }) => game.cursor_position);
  const show_navigation = useAppSelector(({ sslider }) => sslider.show_navigation);

  const cursorStyle: CSSProperties = {
    top: `${y}px`,
    left: `${x}px`,
  };

  if (!show_navigation) {
    return null;
  }

  return (
    <span
      className={`${styles.cursor} ${isActive ? styles.active : ''} ${
        isSmall ? styles.small : ''
      }`}
      style={cursorStyle}
    >
      _
    </span>
  );
};

export default memo(Cursor);
