import React, { FC, useCallback, useEffect, useRef, memo } from 'react';
import { Button } from '@ui/InteractiveElement';
import FallingParticles from '../components/FallingParticles';
import { Link } from '@ui/InteractiveElement';
import Section, { SectionProps } from '../modules/SectionSlider/components/Section';
import SideLinks from '../components/SideLinks';
import TypeWriterText from '../components/TypeWriterText';
import { useOrientationChange } from '../helpers/hooks';
import { useActions, useAppSelector } from '../store/hooks';

const About: FC<SectionProps> = props => {
  const {
    set_barrier_dimensions,
    set_game_container_dimensions,
    set_game_container_scroll,
  } = useActions();

  const show_navigation = useAppSelector(({ sslider }) => sslider.show_navigation);
  const scrollTop = useAppSelector(
    ({ game }) => game.game_container_dimensions.scrollTop
  );

  const frameRef = useRef<HTMLDivElement>(null);
  const frameInnerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const updateGameContinaerDimen = useCallback(() => {
    set_game_container_dimensions(
      frameInnerRef.current.offsetHeight,
      frameInnerRef.current.offsetWidth
    );
  }, [set_game_container_dimensions]);

  const updateGameContinaerScroll = useCallback(() => {
    set_game_container_scroll(frameRef.current.scrollTop, frameRef.current.scrollLeft);
  }, [set_game_container_scroll]);

  const updateBarrierDimen = useCallback(() => {
    const rect = buttonRef.current.getBoundingClientRect();

    const { x, y, height, width } = rect;

    set_barrier_dimensions(x, y + scrollTop, height, width);
  }, [set_barrier_dimensions, scrollTop]);

  const updateGameElements = useCallback(() => {
    updateGameContinaerDimen();
    updateGameContinaerScroll();
    updateBarrierDimen();
  }, [updateGameContinaerDimen, updateBarrierDimen, updateGameContinaerScroll]);

  useEffect(() => {
    updateGameElements();

    const frameEl = frameRef.current;

    window.addEventListener('resize', updateGameElements);
    frameEl.addEventListener('scroll', updateGameContinaerScroll);

    return () => {
      window.removeEventListener('resize', updateGameElements);
      frameEl.removeEventListener('scroll', updateGameContinaerScroll);
    };
  }, [updateGameElements, updateGameContinaerScroll]);

  useOrientationChange(updateGameElements);

  useEffect(() => {
    updateGameContinaerDimen();
    updateBarrierDimen();
  }, [show_navigation, updateBarrierDimen, updateGameContinaerDimen]);

  return (
    <>
      <Section
        classNameStr={'about'}
        {...props}
        frameRef={frameRef}
        frameInnerRef={frameInnerRef}
      >
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
      </Section>
    </>
  );
};

export default memo(About);
