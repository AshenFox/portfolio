import React, { FC } from 'react';
import Arrows from './Arrows';
import Controls from './Controls';
import SliderItem from './SliderItem';

const images = [
  {
    id: '1',
    path: '/6.jpg',
    alt: 'image',
  },
  {
    id: '2',
    path: '/5.jpg',
    alt: 'image',
  },
  {
    id: '3',
    path: '/4.jpg',
    alt: 'image',
  },
];

interface OwnProps {}

type Props = OwnProps;

const ImageSlider: FC<Props> = () => {
  return (
    <>
      <div className='image-slider'>
        <div className='image-slider__bar'>
          <h2>flashcards</h2>
        </div>
        <div className='image-slider__frame'>
          {images.map((data) => (
            <SliderItem data={data} />
          ))}
          <Arrows />
        </div>
      </div>
      <Controls />
    </>
  );
};

export default ImageSlider;
