import React, { FC, memo } from 'react';
import { SectionProps } from '@components/SectionSlider';
import About, { AboutSection } from '@modules/About';
import FallingParticles from '@components/FallingParticles';

const AboutPage: FC<SectionProps> = props => {
  return (
    <AboutSection {...props}>
      <About />
      <FallingParticles />
    </AboutSection>
  );
};

export default memo(AboutPage);
