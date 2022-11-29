import React, { FC } from 'react';
import FancyLink from './FancyLink';

interface OwnProps {}

type Props = OwnProps;

const ContactFooter: FC<Props> = () => {
  return (
    <footer className='contactfooter'>
      <h4>Let's talk</h4>
      <p>Wanna get in touch or talk about a project?</p>
      <p>
        Feel free to contact me via email at{' '}
        <FancyLink href='/contact-page'>rafael@caferati.me</FancyLink>
      </p>
      <p>
        or drop a line in the form at the{' '}
        <FancyLink href='/contact-page' title={'Contact page'}>
          contact page
        </FancyLink>
      </p>
    </footer>
  );
};

export default ContactFooter;
