import { useOrientationChange } from 'helpers/hooks';
import { Link } from '@ui/InteractiveElement';
import React, { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useActions, useAppSelector } from '@store/hooks';
import contact from '../../content';

const Barrier: FC = () => {
  const { set_barrier_dimensions } = useActions();

  const show_navigation = useAppSelector(({ sslider }) => sslider.show_navigation);
  const scrollTop = useAppSelector(
    ({ game }) => game.game_container_dimensions.scrollTop
  );
  const language = useAppSelector(({ language }) => language.language);

  const content_loaded = useAppSelector(
    ({ sslider }) => sslider.content_loader.is_exited
  );

  const buttonRef = useRef<HTMLAnchorElement>(null);

  const updateBarrierDimen = useCallback(() => {
    const rect = buttonRef.current.getBoundingClientRect();

    const { x, y, height, width } = rect;

    set_barrier_dimensions(x, y + scrollTop, height, width);
  }, [set_barrier_dimensions, scrollTop]);

  // set barrier position when content has been loaded
  useEffect(() => {
    if (content_loaded) {
      updateBarrierDimen();
    }
  }, [content_loaded, updateBarrierDimen]);

  // set barrier position on language change and navigation change
  useEffect(() => {
    updateBarrierDimen();
  }, [language, show_navigation, updateBarrierDimen]);

  useEffect(() => {
    updateBarrierDimen();

    window.addEventListener('resize', updateBarrierDimen);

    return () => {
      window.removeEventListener('resize', updateBarrierDimen);
    };
  }, [updateBarrierDimen]);

  useOrientationChange(updateBarrierDimen);

  return (
    <Link
      color='red'
      isBig={true}
      href={'/portfolio'}
      title={'Portfolio'}
      ref={buttonRef}
      isLoading={!show_navigation}
    >
      {contact[language].barrier}
    </Link>
  );
};

export default memo(Barrier);
