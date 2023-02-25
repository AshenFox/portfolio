import React, { FC, useCallback, useEffect, useRef } from 'react';
import Button from '../components/Button';
import FallingParticles from '../components/FallingParticles';
import Link from '../components/Link';
import Section, { Props } from '../components/SectionSlider/Section';
import SideLinks from '../components/SideLinks';
import TypeWriterText from '../components/TypeWriterText';
import { useOrientationChange } from '../helpers/hooks';
import { useActions, useAppSelector } from '../store/hooks';

const About: FC<Props> = props => {
  const { set_barrier_dimensions, set_game_container_dimensions } = useActions();
  const { show_navigation } = useAppSelector(({ sslider }) => sslider);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const updateGameContinaerDimen = useCallback(() => {
    set_game_container_dimensions(
      containerRef.current.offsetHeight,
      containerRef.current.offsetWidth
    );
  }, [set_game_container_dimensions]);

  const updateBarrierDimen = useCallback(() => {
    const rect = buttonRef.current.getBoundingClientRect();

    const { x, y, height, width } = rect;

    set_barrier_dimensions(x, y, height, width);
  }, [set_barrier_dimensions]);

  const updateGameElements = useCallback(() => {
    updateGameContinaerDimen();
    updateBarrierDimen();
  }, [updateGameContinaerDimen, updateBarrierDimen]);

  useEffect(() => {
    updateGameElements();

    window.addEventListener('resize', updateGameElements);

    return () => {
      window.removeEventListener('resize', updateGameElements);
    };
  }, [updateGameElements]);

  useOrientationChange(updateGameElements, 200);

  useEffect(() => {
    updateGameContinaerDimen();
    updateBarrierDimen();
  }, [show_navigation, updateBarrierDimen, updateGameContinaerDimen]);

  return (
    <>
      <Section classNameStr={'about'} {...props} ref={containerRef}>
        <main className='about__main'>
          <TypeWriterText />
        </main>
        <footer className='about__footer'>
          {/* <Button
            color='red'
            isBig={true}
            href={'/portfolio'}
            title={'Portfolio'}
            ref={buttonRef}
          >
            see the portfolio
          </Button> */}

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
      </Section>
    </>
  );
};

export default About;
