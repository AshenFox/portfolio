import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getDir } from '../../helpers/functions';
import { useStateWithRef } from '../../helpers/hooks';
import Controls from './Controls';
import PageLoader from './PageLoader';

const SectionSlider = ({ Component, pageProps, setIsLoaded, isLoaderExited }) => {
  const router = useRouter();
  const { pathname } = router;

  const loadingPathname = useRef(pathname);

  // ============================
  // ===== State/Ref/Values =====
  // ============================

  const [showLoader, setShowLoader] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const [showMenu, setShowMenu, showMenuRef] = useStateWithRef(false);

  const [immediateTransition, setImmediateTransition] = useState(false);

  const [dir, setDir] = useState(null);

  // Received Component
  const [Received, setReceived, ReceivedRef] = useStateWithRef(null);
  // Rendered Component
  const [Rendered, setRendered, RenderedRef] = useStateWithRef({
    pathname,
    Component,
  });

  const isLoaderExitedRef = useRef(isLoaderExited);
  isLoaderExitedRef.current = isLoaderExited;

  const pathsList = useRef(new Set([pathname]));

  const timeout = 825;

  // ===================
  // ===================
  // ===================

  const visited = (path) => pathsList.current.has(path);

  // ==============================
  // ===== Listners/Callbacks =====
  // ==============================

  const onBurgerClick = () => {
    setShowMenu(!showMenu);
  };

  const onLoaderAnimationIteration = (e) => {
    if (ReceivedRef.current) {
      setShowLoader(false);

      setRendered({ ...ReceivedRef.current });
    }
  };

  const onArrowExited = () => {
    if (visited(loadingPathname.current) && Received && !showLoader) {
      setRendered({ ...Received });
    } else {
      setShowLoader(true);
    }
  };

  const onMenuExited = () =>
    loadingPathname.current !== Rendered.pathname && setShowNavigation(false);

  const onSectionExited = () => {
    if (
      loadingPathname.current === ReceivedRef.current.pathname &&
      ReceivedRef.current.Component.name === Component.name
    ) {
      setShowNavigation(true);
      setImmediateTransition(false);
    } else {
      if (visited(loadingPathname.current)) {
        setImmediateTransition(true);
      } else {
        setShowLoader(true);
      }
    }

    setReceived(null);
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
      loadingPathname.current = path;

      if (showMenuRef.current) {
        setShowMenu(false);
      } else {
        if (RenderedRef.current.pathname !== path) {
          setShowNavigation(false);
        }
      }
    };

    router.events.on('routeChangeStart', loadingStart);

    return () => {
      router.events.off('routeChangeStart', loadingStart);
    };
  }, []);

  useEffect(() => {
    if (!Received && Component.name !== Rendered.Component.name) {
      // Add the incoming path into pathlist history
      pathsList.current.add(pathname);

      // Find new direction
      const dir = getDir(pathname, Rendered.pathname);
      setDir(dir);

      // Add a new component
      setReceived({ pathname, Component });
    }
  }, [Component, Received]);

  useEffect(() => {
    if (Received && immediateTransition && !showLoader) {
      setRendered({ ...Received });
      setImmediateTransition(false);
    }
  }, [Received, immediateTransition, showLoader]);

  useEffect(() => {
    if (Received) {
      setRendered({ ...Received });
    }
  }, [isLoaderExited]);

  // ===================
  // ===================
  // ===================

  return (
    <>
      <Controls
        showNavigation={isLoaderExited && showNavigation}
        showMenu={showMenu}
        onBurgerClick={onBurgerClick}
        onMenuExited={onMenuExited}
        onArrowExited={onArrowExited}
      />

      <div className='section-slider'>
        <TransitionGroup component={null}>
          <CSSTransition
            key={Rendered.pathname}
            classNames='section-slider__section'
            timeout={timeout}
            onExited={onSectionExited}
          >
            <Rendered.Component {...pageProps} dir={dir} setIsLoaded={setIsLoaded} />
          </CSSTransition>
        </TransitionGroup>
      </div>

      <PageLoader onAnimationIteration={onLoaderAnimationIteration} active={showLoader} />
    </>
  );
};

export default SectionSlider;
