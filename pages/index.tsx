import React, { FC, memo } from 'react';
import { SectionProps } from '../components/SectionSlider';
import About, { AboutSection } from 'modules/About';

const AboutPage: FC<SectionProps> = props => {
  return (
    <AboutSection {...props}>
      <About />
    </AboutSection>
  );
};

export default memo(AboutPage);
