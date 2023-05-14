import React, { FC, useCallback, useEffect, useRef } from 'react';
import FallingParticles from '@components/FallingParticles';
import { Link } from '@ui/InteractiveElement';
import SideLinks from '@components/SideLinks';
import TypeWriterText from '@components/TypeWriterText';
import { useOrientationChange } from '../../helpers/hooks';
import { useActions, useAppSelector } from '../../store/hooks';

const About: FC = () => {
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
    <>
      <main className='about__main'>
        <TypeWriterText />
      </main>
      <footer className='about__footer'>
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
      </footer>
      <SideLinks />

      <FallingParticles />
    </>
  );
};

export default About;
