import React, { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { Section, SectionProps } from '@components/SectionSlider';
import { useActions, useAppSelector } from '@store/hooks';
import { useOrientationChange } from 'helpers/hooks';

const AboutSection: FC<SectionProps> = props => {
  const { children } = props;

  const { set_game_container_dimensions, set_game_container_scroll } = useActions();

  const show_navigation = useAppSelector(({ sslider }) => sslider.show_navigation);

  const frameRef = useRef<HTMLDivElement>(null);
  const frameInnerRef = useRef<HTMLDivElement>(null);

  const updateGameContinaerDimen = useCallback(() => {
    set_game_container_dimensions(
      frameInnerRef.current.offsetHeight,
      frameInnerRef.current.offsetWidth
    );
  }, [set_game_container_dimensions]);

  const updateGameContinaerScroll = useCallback(() => {
    set_game_container_scroll(frameRef.current.scrollTop, frameRef.current.scrollLeft);
  }, [set_game_container_scroll]);

  const updateGameElements = useCallback(() => {
    updateGameContinaerDimen();
    updateGameContinaerScroll();
  }, [updateGameContinaerDimen, updateGameContinaerScroll]);

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
  }, [show_navigation, updateGameContinaerDimen]);

  return (
    <Section
      classNameStr={styles.about_section}
      {...props}
      frameRef={frameRef}
      frameInnerRef={frameInnerRef}
    >
      {children}
    </Section>
  );
};

export default AboutSection;
