import React from 'react';

const ContactFooter = () => {
  return (
    <footer className='contactfooter'>
      <h4>Let's talk</h4>
      <span>Wanna get in touch or talk about a project?</span>
      <span>
        Feel free to contact me via email at{' '}
        <span className='contactfooter__link'>
          <span className='contactfooter__link-text'>rafael@caferati.me</span>
        </span>
      </span>
      <span>
        or drop a line in the form at the{' '}
        <span className='contactfooter__link'>
          <span className='contactfooter__link-text'>contact page</span>
        </span>
      </span>
    </footer>
  );
};

export default ContactFooter;
