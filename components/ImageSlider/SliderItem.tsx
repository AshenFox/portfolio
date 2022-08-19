import React, { FC } from 'react';

interface OwnProps {
  data: {
    id: string;
    path: string;
    alt: string;
  };
}

type Props = OwnProps;

const SliderItem: FC<Props> = ({ data }) => {
  const { id, path, alt } = data;

  return (
    <div className={`image-slider__item image-slider__item--${id}`}>
      <img src={path} alt={alt} />
    </div>
  );
};

export default SliderItem;
