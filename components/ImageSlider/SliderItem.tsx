import React, { FC } from 'react';

interface OwnProps {
  data: {
    id: number;
    path: string;
    alt: string;
  };
  dir: string;
}

type Props = OwnProps;

const SliderItem: FC<Props> = ({ data, dir }) => {
  const { id, path, alt } = data;

  return (
    <div className={`image-slider__item ${dir}`}>
      <img src={path} alt={alt} />
    </div>
  );
};

export default SliderItem;
