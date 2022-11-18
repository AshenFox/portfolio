import React, { FC } from 'react';
import Button from '../components/Button';
import FancyLink from '../components/FancyLink';
import Section, { Props } from '../components/SectionSlider/Section';
import SideLinks from '../components/SideLinks';
import TypeWriterText from '../components/TypeWriterText';

const About: FC<Props> = (props) => {
  return (
    <Section classNameStr={'about'} {...props}>
      <main className='about__container'>
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
        >
          see the portfolio
        </Button>
      </footer>
    </Section>
  );
};

export default About;
