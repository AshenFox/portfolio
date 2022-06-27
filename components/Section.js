import React, { useEffect } from 'react';

const Section = ({ dir, classNameStr, children, setIsLoaded }) => {
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`section-slider__section ${dir} ${classNameStr}`}>
      <div className='section-slider__frame'>{children}</div>
    </section>
  );
};

export default Section;
