import React, { CSSProperties, FC } from 'react';
import { useAppSelector } from '../../store/hooks';

interface OwnProps {
  isSmall?: boolean;
  isActive?: boolean;
}

type Props = OwnProps;

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
      className={`about__cursor ${isActive ? 'active' : ''} ${isSmall ? 'small' : ''}`}
      style={cursorStyle}
    >
      _
    </span>
  );
};

export default Cursor;
