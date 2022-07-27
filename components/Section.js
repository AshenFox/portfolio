import React, { useEffect } from 'react';
import Granim from 'granim';

const gradients1 = [
  ['#ff9966', '#ff5e62'],
  ['#00F260', '#0575E6'],
  ['#f05053', '#f0e937'],
];

const gradients2 = [
  ['#2c2c2c', '#3f3f3f'],
  ['#1d1d1d', '#2c2c2c'],
  ['#3f3f3f', '#1d1d1d'],
];

const gradients3 = [
  ['#2c2c2c', '#2c2c2c', '#3f3f3f'],
  ['#3f3f3f', '#2c2c2c', '#2c2c2c'],
  ['#3f3f3f', '#3f3f3f', '#2c2c2c'],
  ['#2c2c2c', '#3f3f3f', '#3f3f3f'],
];

const Section = ({ dir, classNameStr, children, setIsLoaded }) => {
  const granimClassName = 'granim-' + classNameStr;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const granimInstance = new Granim({
      element: '.' + granimClassName,
      name: 'granim',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: gradients3,
        },
      },
    });
  }, []);

  return (
    <section className={`section-slider__section ${dir} ${classNameStr}`}>
      <div className='section-slider__frame'>
        <div className='section-slider__frame-inner'>
          <canvas className={`section-slider__granim ${granimClassName}`} />
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
