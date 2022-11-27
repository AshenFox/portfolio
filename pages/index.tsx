import React, { FC, useEffect, useRef } from 'react';
import Button from '../components/Button';
import FallingParticles from '../components/FallingParticles';
import Section, { Props } from '../components/SectionSlider/Section';
import SideLinks from '../components/SideLinks';
import TypeWriterText from '../components/TypeWriterText';
import { useActions } from '../store/hooks';

const About: FC<Props> = (props) => {
  const { set_barrier_dimensions, set_game_container_dimensions } = useActions();

  const containerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
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

    updateGameContinaerDimen();
    updateBarrierDimen();

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

  return (
    <>
      <Section classNameStr={'about'} {...props}>
        <main className='about__container' ref={containerRef}>
          <TypeWriterText />
        </main>
        <SideLinks />
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
        <FallingParticles />
      </Section>
    </>
  );
};

export default About;
