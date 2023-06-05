import React, { FC, MouseEventHandler } from 'react';
import { Images } from '../../ImageSlider';
import ControlsItem from './ControlsItem';
import styles from './styles.module.scss';

type Props = {
  images: Images;
  activeID: number;
  onClickCreator: (i: number) => MouseEventHandler<HTMLDivElement>;
};

const Controls: FC<Props> = ({ images, activeID, onClickCreator }) => {
  return (
    <div className={styles.controls}>
      {images.map((data, i) => {
        const onClick = onClickCreator(i);

        return (
          <ControlsItem
            key={i}
            data={data}
            ownID={i}
            activeID={activeID}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default Controls;
