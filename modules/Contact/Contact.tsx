import ContactForm from '@components/ContactForm';
import FancyLink from '@ui/FancyLink';
import { Link } from '@ui/InteractiveElement';
import React, { FC } from 'react';
import styles from './styles.module.scss';

const Contact: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Get In Touch</h1>
        <h2 className={styles.description}>
          If you wanna get in touch, talk to me about a project collaboration or just say
          hi, fill up the awesome form below or send an email to{' '}
          <FancyLink>rafael@caferati.me</FancyLink> and ~let&apos;s talk.
        </h2>
      </header>

      <main className={styles.main}>
        <ContactForm />
      </main>

      <footer>
        <h3 className={styles.footer_header}>Let&apos;s get social</h3>
        <p className={styles.footer_paragraph}>
          Follow my online fan page on Facebook and profiles on Twitter, GitHub and
          Linkedin.
        </p>
        <div className={styles.footer_links}>
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
    </>
  );
};

export default Contact;
