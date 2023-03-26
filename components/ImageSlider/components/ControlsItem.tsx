import React, { FC, MouseEventHandler } from 'react';
import { Image } from '.';

interface OwnProps {
  data: Image;
  ownID: number;
  activeID: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}

type Props = OwnProps;

const ControlsItem: FC<Props> = ({ data, ownID, activeID, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`image-slider__controls-item ${ownID === activeID ? 'active' : ''}`}
    />
  );
};

export default ControlsItem;
