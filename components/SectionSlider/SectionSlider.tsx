import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { AnimationEventHandler, FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useStateWithRef, useUpdatedRef } from '../../helpers/hooks';
import { useActions, useAppSelector } from '../../store/hooks';
import ContentLoader from './components/ContentLoader';

import Controls from './components/Controls';
import { SectionClassNames } from './components/Section';
import SectionLoader from './components/SectionLoader';
import styles from './styles.module.scss';

interface ComponentWithPathname {
  Component: NextComponentType<NextPageContext, any, {}>;
  path: string;
  id: number;
  isFirstRender?: boolean;
}

interface OwnProps {}

type Props = OwnProps & AppProps;

let unique = {
  id: 0,
};

const SectionSlider: FC<Props> = ({ Component, pageProps }) => {
  const { set_show_section_loader, set_show_navigation, set_show_menu, set_direction } =
    useActions();

  const {
    content_loader: { is_exited },
    menu: { show_menu },
    show_section_loader,
  } = useAppSelector(({ sslider }) => sslider);

  const router = useRouter();
  const { asPath: path, isReady } = router;

  const isReadyRef = useRef(router.isReady);
  isReadyRef.current = router.isReady;

  const loadingPath = useRef(path);

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
    path,
    Component,
    id: unique.id,
    isFirstRender: true,
  });

  const pathsList = useRef(new Set([path]));

  const timeout: number = 825;

  // ===================
  // ===================
  // ===================

  const visited = (path: string) => pathsList.current.has(path);

  // ==============================
  // ===== Listners/Callbacks =====
  // ==============================

  const onLoaderAnimationIteration: AnimationEventHandler<HTMLDivElement> = e => {
    if (ReceivedRef.current) {
      set_show_section_loader(false);

      setRendered({ ...ReceivedRef.current });
    }
  };

  const onArrowExited = () => {
    if (visited(loadingPath.current) && Received && !show_section_loader) {
      setRendered({ ...Received });
    } else if (loadingPath.current !== Rendered.path) {
      set_show_section_loader(true);
    }
  };

  const onBurgerExited = () =>
    loadingPath.current !== Rendered.path && set_show_navigation(false); // ???????!!!!!!!!!!!

  const onSectionExited = () => {
    if (
      loadingPath.current === ReceivedRef.current.path &&
      ReceivedRef.current.Component.name === Component.name
    ) {
      set_show_navigation(true);
      setImmediateTransition(false);
    } else {
      if (visited(loadingPath.current)) {
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
    if (isReady) setRendered({ ...Rendered, path, isFirstRender: false });
  }, [isReady]);

  useEffect(() => {
    const loadingStart = (url: string) => {
      const path = url.match(/^[^?]*/g)[0];
      loadingPath.current = path;

      if (showMenuRef.current) {
        set_show_menu(false);
      } else {
        if (RenderedRef.current.path !== path && isReadyRef.current) {
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
    if (!Received && loadingPath.current !== Rendered.path && !Rendered.isFirstRender) {
      // Add the incoming path into pathlist history
      pathsList.current.add(path);

      // Find new direction
      set_direction(path, Rendered.path);

      // Add a new component
      unique.id += 1;
      setReceived({ path, Component, id: unique.id }); //
    }
  }, [Component, Received, path]);

  useEffect(() => {
    if (Received && immediateTransition && !show_section_loader) {
      console.log('fire!');
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

      <div className={styles.section_slider}>
        <TransitionGroup component={null}>
          <CSSTransition
            key={Rendered.id}
            classNames={SectionClassNames}
            timeout={timeout}
            onExited={onSectionExited}
          >
            <Rendered.Component {...pageProps} />
          </CSSTransition>
        </TransitionGroup>
      </div>

      <SectionLoader onAnimationIteration={onLoaderAnimationIteration} />

      <ContentLoader />
    </>
  );
};

export default SectionSlider;
