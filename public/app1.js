import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getDir } from '../helpers/functions';
import { useStateWithRef } from '../helpers/hooks';
import Arrows from './Arrows';
import Menu from './Menu';
import PageLoader from './PageLoader';

const SectionSlider = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;

  const loadingPathname = useRef(pathname);

  console.log(pathname, Component.name, loadingPathname.current);

  // ============================
  // ===== State/Ref/Values =====
  // ============================

  const [showLoader, setShowLoader] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const [showMenu, setShowMenu, showMenuRef] = useStateWithRef(false);

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

  const onBurgerClick = () => {
    setShowMenu(!showMenu);
  };

  const onLoaderAnimationIteration = (e) => {
    // console.log(NewComponent, pathsList.current.has(pathname));
    if (NewComponent && pathsList.current.has(pathname)) {
      setShowLoader(false);

      setRenderedComponent({ ...NewComponent });
    }
  };

  const onArrowExited = () => {
    if (pathsList.current.has(pathname)) {
      if (NewComponent && !showLoader) {
        setRenderedComponent({ ...NewComponent });
      }
    } else {
      setShowLoader(true);
    }
  };

  const onMenuExited = () => {
    if (NewComponent) hideNavigation(pathname);
  };

  const onSectionExited = () => {
    /* console.log(
      pathname,
      pathnameRef.current,
      Component.name,
      NewComponent.Component.name
    ); */

    if (loadingPathname.current === NewComponent.pathname) {
      setShowNavigation(true);
      setImmediateTransition(false);
    } else {
      if (pathsList.current.has(loadingPathname.current)) {
        setImmediateTransition(true);
      } else {
        console.log(Component.name, NewComponent.name);
        setShowLoader(true);
      }
    }

    /* if (Component.name === NewComponent.Component.name) {
      setShowNavigation(true);
      setImmediateTransition(false);
    } else {
      setImmediateTransition(true);
    } */

    setNewComponent(null);
  };

  // ===================
  // ===================
  // ===================

  const hideNavigation = (path) => {
    setShowNavigation(false);

    // console.log(pathsList.current, path);
    // if (!pathsList.current.has(path)) setShowLoader(true);
  };

  // ===================
  // ===== Effects =====
  // ===================

  useEffect(() => {
    const loadingStart = (url) => {
      const path = url.match(/^[^?]*/g)[0];
      loadingPathname.current = path;

      if (RenderedComponentRef.current.pathname !== path) {
        if (showMenuRef.current) {
          setShowMenu(false);
        } else {
          hideNavigation(path);
        }
      }
    };

    router.events.on('routeChangeStart', loadingStart);

    return () => {
      router.events.off('routeChangeStart', loadingStart);
    };
  }, []);

  useEffect(() => {
    /* setTimeout(() => {
      
    }, 2000); */

    if (!NewComponent && Component.name !== RenderedComponent.Component.name) {
      // if (immediateTransition && !pathsList.current.has(pathname)) setShowLoader(true);
      // Add the incoming path into pathlist history
      pathsList.current.add(pathname);

      // Find new direction
      const dir = getDir(pathname, RenderedComponent.pathname);
      setDir(dir);

      // Add a new component
      setNewComponent({ pathname, Component });
    }
  }, [Component, NewComponent]);

  useEffect(() => {
    if (NewComponent && immediateTransition && !showLoader) {
      setRenderedComponent({ ...NewComponent });
      setImmediateTransition(false);
    }
  }, [NewComponent, Component, immediateTransition]);

  // ===================
  // ===================
  // ===================

  return (
    <>
      <Menu
        showNavigation={showNavigation}
        showMenu={showMenu}
        onBurgerClick={onBurgerClick}
        onExited={onMenuExited}
      />
      <Arrows onExited={onArrowExited} showNavigation={showNavigation} />

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

      <PageLoader onAnimationIteration={onLoaderAnimationIteration} active={showLoader} />
    </>
  );
};

export default SectionSlider;
