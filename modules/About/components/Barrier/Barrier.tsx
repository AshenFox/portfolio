import { useOrientationChange } from 'helpers/hooks';
import { Link } from '@ui/InteractiveElement';
import React, { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useActions, useAppSelector } from 'store/hooks';

const Barrier: FC = () => {
  const { set_barrier_dimensions } = useActions();

  const show_navigation = useAppSelector(({ sslider }) => sslider.show_navigation);
  const scrollTop = useAppSelector(
    ({ game }) => game.game_container_dimensions.scrollTop
  );
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const updateBarrierDimen = useCallback(() => {
    const rect = buttonRef.current.getBoundingClientRect();

    const { x, y, height, width } = rect;

    set_barrier_dimensions(x, y + scrollTop, height, width);
  }, [set_barrier_dimensions, scrollTop]);

  useEffect(() => {
    updateBarrierDimen();

    window.addEventListener('resize', updateBarrierDimen);

    return () => {
      window.removeEventListener('resize', updateBarrierDimen);
    };
  }, [updateBarrierDimen]);

  useOrientationChange(updateBarrierDimen);

  useEffect(() => {
    updateBarrierDimen();
  }, [show_navigation, updateBarrierDimen]);

  return (
    <Link
      color='red'
      isBig={true}
      href={'/portfolio'}
      title={'Portfolio'}
      ref={buttonRef}
      isLoading={!show_navigation}
    >
      see the portfolio
    </Link>
  );
};

export default memo(Barrier);
