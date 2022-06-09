import React from 'react';

const Section = ({ dir, classNameStr, children }) => {
  return (
    <section className={`section-slider__section ${dir} ${classNameStr}`}>
      <div className='section-slider__frame'>{children}</div>
    </section>
  );
};

export default Section;
