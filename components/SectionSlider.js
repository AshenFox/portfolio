import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getDir } from '../helpers/functions';
import { useStateWithRef } from '../helpers/hooks';
import Arrows from './Arrows';
import Burger from './Burger';
import PageLoader from './PageLoader';

const SectionSlider = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;

  // ============================
  // ===== State/Ref/Values =====
  // ============================

  const [showLoader, setShowLoader] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);

  const [immediateTransition, setImmediateTransition] = useState(false);

  const [dir, setDir] = useState(null);

  // New Component
  const [NewComponent, setNewComponent] = useState(null);
  // Rendered Component
  const [RenderedComponent, setRenderedComponent, RenderedComponentRef] = useStateWithRef(
    {
      pathname,
      Component,
    }
  );

  const pathsList = useRef(new Set([pathname]));

  const timeout = 800;

  // ===================
  // ===================
  // ===================

  // ==============================
  // ===== Listners/Callbacks =====
  // ==============================

  const onLoaderAnimationEnd = () => {
    setShowLoader(false);

    if (NewComponent) {
      setRenderedComponent({ ...NewComponent });
    }
  };

  const onArrowExited = () => {
    if (NewComponent && !showLoader) {
      setRenderedComponent({ ...NewComponent });
    }
  };

  const onSectionExited = () => {
    if (Component.name === NewComponent.Component.name) {
      setShowNavigation(true);
      setImmediateTransition(false);
    } else {
      setImmediateTransition(true);
    }
    setNewComponent(null);
  };

  // ===================
  // ===================
  // ===================

  // ===================
  // ===== Effects =====
  // ===================

  useEffect(() => {
    const loadingStart = (url) => {
      const path = url.match(/^[^?]*/g)[0];

      if (RenderedComponentRef.current.pathname !== path) {
        setShowNavigation(false); // ?????

        if (!pathsList.current.has(path)) setShowLoader(true);
      }
    };

    router.events.on('routeChangeStart', loadingStart);

    return () => {
      router.events.off('routeChangeStart', loadingStart);
    };
  }, []);

  useEffect(() => {
    if (!NewComponent && Component.name !== RenderedComponent.Component.name) {
      setShowNavigation(false);

      if (immediateTransition && !pathsList.current.has(pathname)) setShowLoader(true);
      // Add the incoming path into pathlist history
      pathsList.current.add(pathname);

      // Find new direction
      const dir = getDir(pathname, RenderedComponent.pathname);
      setDir(dir);

      // Add a new component
      setNewComponent({ pathname, Component });
    }

    if (!NewComponent && Component.name === RenderedComponent.Component.name) {
      setShowNavigation(true);
    }
  }, [Component, NewComponent]);

  useEffect(() => {
    if (NewComponent && !showLoader && (showNavigation || immediateTransition)) {
      setRenderedComponent({ ...NewComponent });
    }
  }, [NewComponent]);

  // ===================
  // ===================
  // ===================

  return (
    <>
      <Burger active={showNavigation} />
      <Arrows onExited={onArrowExited} active={showNavigation} />

      <div className='section-slider'>
        <TransitionGroup component={null}>
          <CSSTransition
            key={RenderedComponent.pathname}
            classNames='section-slider__section'
            timeout={timeout}
            onExited={onSectionExited}
          >
            <RenderedComponent.Component {...pageProps} dir={dir} />
          </CSSTransition>
        </TransitionGroup>
      </div>

      <PageLoader onEntered={onLoaderAnimationEnd} active={showLoader} />
    </>
  );
};

export default SectionSlider;

/* 
<div className='section-slider'>
    <TransitionGroup component={null}>{children}</TransitionGroup>
</div> 
*/
