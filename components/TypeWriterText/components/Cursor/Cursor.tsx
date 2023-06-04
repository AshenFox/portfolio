import React, { CSSProperties, FC } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import styles from './styles.module.scss';

type Props = {
  isSmall?: boolean;
  isActive?: boolean;
};

const Cursor: FC<Props> = ({ isActive = false, isSmall = false }) => {
  const { x, y } = useAppSelector(({ game }) => game.cursor_position);
  const scrollTop = useAppSelector(
    ({ game }) => game.game_container_dimensions.scrollTop
  );

  const cursorStyle: CSSProperties = {
    top: `${y + scrollTop}px`,
    left: `${x}px`,
  };

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

export default Cursor;
