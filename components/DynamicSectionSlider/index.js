import ContentLoader from './ContentLoader';
import React, { useState } from 'react';
import SectionSlider from './SectionSlider';

const DynamicSectionSlider = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAppearing, setIsAppearing] = useState(true);
  const [isExited, setIsExited] = useState(false);

  const onEntered = () => {
    setIsAppearing(false);
  };

  const onExited = () => {
    setIsExited(true);
  };

  return (
    <>
      <SectionSlider {...props} setIsLoaded={setIsLoaded} isLoaderExited={isExited} />

      <ContentLoader
        isLoaded={isLoaded}
        isAppearing={isAppearing}
        onEntered={onEntered}
        onExited={onExited}
      />
    </>
  );
};

export default DynamicSectionSlider;
