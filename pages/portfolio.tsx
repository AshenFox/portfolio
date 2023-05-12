import React, { FC, memo } from 'react';
import ContactFooter from '../components/ContactFooter';
import { Section, SectionProps } from '../modules/SectionSlider';
import Filter from '../components/Filter';
import PageContainer from '@ui/PageContainer';

const Portfolio: FC<SectionProps> = props => {
  return (
    <Section classNameStr={'portfolio'} {...props}>
      <PageContainer>
        <header className='portfolio__header'>
          <h1 className='portfolio__title'>web developer portfolio</h1>
          <h3 className='portfolio__description'>
            From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and
            Node.JS. Check out my latest web software development portfolio projects.
          </h3>
        </header>

        <main className='portfolio__main'>
          <Filter />
        </main>

        <ContactFooter />
      </PageContainer>
    </Section>
  );
};

export default memo(Portfolio);
