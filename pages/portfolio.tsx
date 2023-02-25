import React, { FC } from 'react';
import ContactFooter from '../components/ContactFooter';
import Section, { Props } from '../components/SectionSlider/Section';
import Filter from '../components/Filter';

const Portfolio: FC<Props> = props => {
  return (
    <Section classNameStr={'portfolio'} {...props}>
      <div className='page__container'>
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
      </div>
    </Section>
  );
};

export default Portfolio;
