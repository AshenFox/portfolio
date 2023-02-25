import React, { FC } from 'react';
import Section, { Props } from '../components/SectionSlider/Section';
import Button from '../components/Button';
import FancyLink from '../components/FancyLink';
import ContactForm from '../components/ContactForm';
import Link from '../components/Link';

const ContactPage: FC<Props> = props => {
  return (
    <Section classNameStr={'contact-page'} {...props}>
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

export default ContactPage;
