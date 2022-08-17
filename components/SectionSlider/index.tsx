import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { AnimationEventHandler, FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useStateWithRef, useUpdatedRef } from '../../helpers/hooks';
import { useActions, useAppSelector } from '../../store/hooks';
import ContentLoader from './ContentLoader';

import Controls from './Controls';
import PageLoader from './SectionLoader';

interface ComponentWithPathname {
  Component: NextComponentType<NextPageContext, any, {}>;
  pathname: string;
}

interface OwnProps {}

type Props = OwnProps & AppProps;

const SectionSlider: FC<Props> = ({ Component, pageProps }) => {
  const { set_show_section_loader, set_show_navigation, set_show_menu, set_direction } =
    useActions();

  const {
    content_loader: { is_exited },
    show_menu,
    show_section_loader,
  } = useAppSelector(({ sslider }) => sslider);

  const router = useRouter();
  const { pathname } = router;

  const loadingPathname = useRef(pathname);

  // ============================
  // ===== State/Ref/Values =====
  // ============================

  const showMenuRef = useUpdatedRef(show_menu);
  const [immediateTransition, setImmediateTransition] = useState(false);

  // Received Component
  const [Received, setReceived, ReceivedRef] =
    useStateWithRef<ComponentWithPathname>(null);
  // Rendered Component
  const [Rendered, setRendered, RenderedRef] = useStateWithRef<ComponentWithPathname>({
    pathname,
    Component,
  });

  const pathsList = useRef(new Set([pathname]));

  const timeout: number = 825;

  // ===================
  // ===================
  // ===================

  const visited = (path: string) => pathsList.current.has(path);

  // ==============================
  // ===== Listners/Callbacks =====
  // ==============================

  const onLoaderAnimationIteration: AnimationEventHandler<HTMLDivElement> = (e) => {
    if (ReceivedRef.current) {
      set_show_section_loader(false);

      setRendered({ ...ReceivedRef.current });
    }
  };

  const onArrowExited = () => {
    if (visited(loadingPathname.current) && Received && !show_section_loader) {
      setRendered({ ...Received });
    } else {
      set_show_section_loader(true);
    }
  };

  const onBurgerExited = () =>
    loadingPathname.current !== Rendered.pathname && set_show_navigation(false); // ???????!!!!!!!!!!!

  const onSectionExited = () => {
    if (
      loadingPathname.current === ReceivedRef.current.pathname &&
      ReceivedRef.current.Component.name === Component.name
    ) {
      set_show_navigation(true);
      setImmediateTransition(false);
    } else {
      if (visited(loadingPathname.current)) {
        setImmediateTransition(true);
      } else {
        set_show_section_loader(true);
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
    const loadingStart = (url: string) => {
      const path = url.match(/^[^?]*/g)[0];
      loadingPathname.current = path;

      if (showMenuRef.current) {
        set_show_menu(false);
      } else {
        if (RenderedRef.current.pathname !== path) {
          set_show_navigation(false);
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
      set_direction(pathname, Rendered.pathname);

      // Add a new component
      setReceived({ pathname, Component });
    }
  }, [Component, Received]);

  useEffect(() => {
    if (Received && immediateTransition && !show_section_loader) {
      setRendered({ ...Received });
      setImmediateTransition(false);
    }
  }, [Received, immediateTransition, show_section_loader]);

  useEffect(() => {
    if (Received) {
      setRendered({ ...Received });
    }
  }, [is_exited]);

  // ===================
  // ===================
  // ===================

  return (
    <>
      <Controls onBurgerExited={onBurgerExited} onArrowExited={onArrowExited} />

      <div className='section-slider'>
        <TransitionGroup component={null}>
          <CSSTransition
            key={Rendered.pathname}
            classNames='section-slider__section'
            timeout={timeout}
            onExited={onSectionExited}
          >
            <Rendered.Component {...pageProps} />
          </CSSTransition>
        </TransitionGroup>
      </div>

      <PageLoader onAnimationIteration={onLoaderAnimationIteration} />

      <ContentLoader />
    </>
  );
};

export default SectionSlider;
