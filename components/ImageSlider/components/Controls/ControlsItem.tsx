import React, { FC, MouseEventHandler, memo } from 'react';
import { Image } from '../../ImageSlider';
import styles from './styles.module.scss';

type Props = {
  data: Image;
  ownID: number;
  activeID: number;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const ControlsItem: FC<Props> = ({ data, ownID, activeID, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.controls_item} ${ownID === activeID ? styles.active : ''}`}
    />
  );
};

export default memo(ControlsItem);
