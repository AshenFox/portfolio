import React, { FC, memo } from 'react';
import ContactFooter from '../components/ContactFooter';
import { Section, SectionProps } from '../components/SectionSlider';
import PageContainer from '@ui/PageContainer';
import Portfolio from 'modules/Portfolio';

const PortfolioPage: FC<SectionProps> = props => {
  return (
    <Section classNameStr={'portfolio'} {...props}>
      <PageContainer>
        <Portfolio />

        <ContactFooter />
      </PageContainer>
    </Section>
  );
};

export default memo(PortfolioPage);
