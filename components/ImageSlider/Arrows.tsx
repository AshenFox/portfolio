import React from 'react';

const Arrows = () => {
  return (
    <>
      <div className='image-slider__arrow image-slider__arrow--left'>
        <button className='image-slider__arrow-button'></button>
        <div className='image-slider__arrow-icon'></div>
      </div>
      <div className='image-slider__arrow image-slider__arrow--right'>
        <button className='image-slider__arrow-button'></button>
        <div className='image-slider__arrow-icon'></div>
      </div>
    </>
  );
};

export default Arrows;
