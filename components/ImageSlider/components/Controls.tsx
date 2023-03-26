import React, { FC, MouseEventHandler } from 'react';
import { Images } from '.';
import ControlsItem from './ControlsItem';

interface OwnProps {
  images: Images;
  activeID: number;
  onClickCreator: (i: number) => MouseEventHandler<HTMLDivElement>;
}

type Props = OwnProps;

const Controls: FC<Props> = ({ images, activeID, onClickCreator }) => {
  return (
    <div className='image-slider__controls'>
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
