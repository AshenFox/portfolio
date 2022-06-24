import ContentLoader from './ContentLoader';
import React, { Suspense, useEffect, useState } from 'react';
import { lazyWithPreload } from '../helpers/functions';

const LazySectionSlider = lazyWithPreload(() => import('./SectionSlider'));

const DynamicSectionSlider = ({ Component, pageProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAppearing, setIsAppearing] = useState(true);

  const onEntered = () => {
    setIsAppearing(false);
  };

  useEffect(() => {
    (async () => {
      const result = await LazySectionSlider.preload();

      /* await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 5000);
      }); */

      if (result) setIsLoaded(true);
    })();
  }, []);

  const showSlider = !isAppearing && isLoaded;

  return (
    <>
      <Suspense>
        {showSlider && <LazySectionSlider Component={Component} pageProps={pageProps} />}
      </Suspense>

      <ContentLoader
        isLoaded={isLoaded}
        isAppearing={isAppearing}
        onEntered={onEntered}
      />
    </>
  );
};

export default DynamicSectionSlider;
