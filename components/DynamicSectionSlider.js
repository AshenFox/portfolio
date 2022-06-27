import ContentLoader from './ContentLoader';
import React, { useState } from 'react';
import SectionSlider from './SectionSlider';

const DynamicSectionSlider = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAppearing, setIsAppearing] = useState(true);

  const onEntered = () => {
    setIsAppearing(false);
  };

  return (
    <>
      <SectionSlider {...props} setIsLoaded={setIsLoaded} />

      <ContentLoader
        isLoaded={isLoaded}
        isAppearing={isAppearing}
        onEntered={onEntered}
      />
    </>
  );
};

export default DynamicSectionSlider;
