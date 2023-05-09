import React, { FC, MouseEventHandler } from 'react';
import { Image } from '../../ImageSlider';
import styles from './styles.module.scss';

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
      className={`${styles.controls_item} ${ownID === activeID ? styles.active : ''}`}
    />
  );
};

export default ControlsItem;
