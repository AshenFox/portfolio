import React, { CSSProperties, FC } from 'react';
import { useAppSelector } from '../../store/hooks';

// type HeaderTextType = 'text' | 'link';

interface OwnProps {
  isSmall?: boolean;
  isActive?: boolean;
}

type Props = OwnProps;

const Cursor: FC<Props> = ({ isActive = false, isSmall = false }) => {
  const {
    cursor_position: { x, y },
  } = useAppSelector(({ game }) => game);

  const cursorStyle: CSSProperties = {
    top: `${y}px`,
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
