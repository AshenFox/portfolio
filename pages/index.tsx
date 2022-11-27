import React, { FC, useEffect, useRef } from 'react';
import Button from '../components/Button';
import FallingParticles from '../components/FallingParticles';
import Section, { Props } from '../components/SectionSlider/Section';
import SideLinks from '../components/SideLinks';
import TypeWriterText from '../components/TypeWriterText';
import { useActions, useAppSelector } from '../store/hooks';

const About: FC<Props> = (props) => {
  const { set_barrier_dimensions, set_game_container_dimensions } = useActions();
  const { show_navigation } = useAppSelector(({ sslider }) => sslider);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updateGameContinaerDimen = () => {
    set_game_container_dimensions(
      containerRef.current.offsetHeight,
      containerRef.current.offsetWidth
    );
  };

  const updateBarrierDimen = () => {
    const rect = buttonRef.current.getBoundingClientRect();

    const { x, y, height, width } = rect;

    set_barrier_dimensions(x, y, height, width);
  };

  useEffect(() => {
    const onResize = () => {
      updateGameContinaerDimen();
      updateBarrierDimen();
    };

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    updateGameContinaerDimen();
    updateBarrierDimen();
  }, [show_navigation]);

  return (
    <>
      <Section classNameStr={'about'} {...props} ref={containerRef}>
        <main className='about__main'>
          <TypeWriterText />
        </main>
        <footer className='about__footer'>
          <Button
            isClicked={false}
            color='red'
            isBig={true}
            href={'/portfolio'}
            title={'Portfolio'}
            ref={buttonRef}
          >
            see the portfolio
          </Button>
        </footer>
        <SideLinks />

        <FallingParticles />
      </Section>
    </>
  );
};

export default About;
