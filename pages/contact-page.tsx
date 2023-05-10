import React, { FC, memo, ReactNode } from 'react';
import { Section, SectionProps } from '../modules/SectionSlider';
import { Button } from '@ui/InteractiveElement';
import FancyLink from '../ui/FancyLink';
import ContactForm from '../components/ContactForm';
import { Link } from '@ui/InteractiveElement';

const ContactPage: FC<SectionProps> = props => {
  return (
    <Section classNameStr={'contact_page'} {...props}>
      <div className='page__container'>
        <header className='contact-page__header'>
          <h1 className='contact-page__title'>Get In Touch</h1>
          <h2 className='contact-page__description'>
            If you wanna get in touch, talk to me about a project collaboration or just
            say hi, fill up the awesome form below or send an email to{' '}
            <FancyLink>rafael@caferati.me</FancyLink> and ~let&apos;s talk.
          </h2>
        </header>

        <main className='contact-page__main'>
          <ContactForm />
        </main>

        <footer className='contact-page__footer'>
          <h3 className='contact-page__footer-header'>Let&apos;s get social</h3>
          <p className='contact-page__footer-paragraph'>
            Follow my online fan page on Facebook and profiles on Twitter, GitHub and
            Linkedin.
          </p>
          <div className='contact-page__footer-links'>
            <Link color='grey' icon='github' href='https://github.com/' title='Github'>
              github
            </Link>
            <Link
              color='blue'
              icon='facebook'
              href='https://www.facebook.com/'
              title='Facebook'
            >
              facebook
            </Link>
          </div>
        </footer>
      </div>
    </Section>
  );
};

export default memo(ContactPage);
