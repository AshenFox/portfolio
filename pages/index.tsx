import React, { FC, memo } from 'react';
import { SectionProps } from '../components/SectionSlider';
import { AboutSection } from 'modules/AboutModule';
import AboutModule from 'modules/AboutModule';

const About: FC<SectionProps> = props => {
  return (
    <AboutSection {...props}>
      <AboutModule />
    </AboutSection>
  );
};

export default memo(About);
