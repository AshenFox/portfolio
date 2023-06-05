import React, { FC, memo } from 'react';
import ContactFooter from '@components/ContactFooter';
import { Section, SectionProps } from '@components/SectionSlider';
import PageContainer from '@ui/PageContainer';
import Project from '@modules/Project';

const ProjectPage: FC<SectionProps> = props => {
  return (
    <Section classNameStr={'project'} {...props}>
      <PageContainer>
        <Project />

        <ContactFooter />
      </PageContainer>
    </Section>
  );
};

export default memo(ProjectPage);
