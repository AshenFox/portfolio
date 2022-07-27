import MailIcon from '../components/icons/MailIcon';
import PersonIcon from '../components/icons/PersonIcon';
import PentosquareIcon from '../components/icons/PentosquareIcon';
import Section from '../components/Section';
import Button from '../components/Button';
import FancyLink from '../components/FancyLink';
import { useEffect, useRef, useState } from 'react';

// Fill with your name
// Now your email address
// Now write your awesome message

export default function ContactPage(props) {
  const [textareaValue, setTextAreaValue] = useState('');

  const onChange = (e) => {
    const { target } = e;

    target.style.height = `0px`;
    target.style.height = `${target.scrollHeight}px`;

    setTextAreaValue(target.value);
  };

  return (
    <Section classNameStr={'contact-page'} {...props}>
      <div className='page__container'>
        <div className='contact-page__container'>
          <header className='contact-page__header'>
            <h1 className='contact-page__title'>Get In Touch</h1>
            <h2 className='contact-page__description'>
              If you wanna get in touch, talk to me about a project collaboration or just
              say hi, fill up the awesome form below or send an email to{' '}
              <FancyLink>rafael@caferati.me</FancyLink> and ~let's talk.
            </h2>
          </header>

          <main className='contact-page__main'>
            <form action='' className='contact-page__form' onSubmit={undefined}>
              <ul className='contact-page__info'>
                <li className='contact-page__info-item name filled '>
                  <PersonIcon />
                  <span>Fill with your name</span>
                  {/* Fill with your name */}
                </li>
                <li className='contact-page__info-item email filled '>
                  <MailIcon />
                  <span>Now your email address</span>
                  {/* Now your email address */}
                </li>
                <li className='contact-page__info-item message '>
                  <PentosquareIcon />
                  <span>Now write your awesome message :)</span>
                  {/* Now write your awesome message :) */}
                </li>
              </ul>

              <div className='contact-page__textarea'>
                {/* <PersonIcon /> */}
                {/* <MailIcon /> */}
                <PentosquareIcon />
                <textarea
                  placeholder='Now write your awesome message :)'
                  name='name'
                  id=''
                  rows='1'
                  onChange={onChange}
                  value={textareaValue}
                ></textarea>
              </div>

              <div className='contact-page__form-contorls'>
                <Button color='green' isActive={false}>
                  next
                </Button>
                <Button color='green' isActive={false}>
                  submit your message
                </Button>
              </div>
            </form>
          </main>

          <footer className='contact-page__footer'>
            <h3 className='contact-page__footer-header'>Let’s get social</h3>
            <p className='contact-page__footer-paragraph'>
              Follow my online fan page on Facebook and profiles on Twitter, GitHub and
              Linkedin.
            </p>
            <div className='contact-page__footer-links'>
              <Button
                color='grey'
                icon='github'
                href='https://github.com/'
                title='Github'
              >
                github
              </Button>
              <Button
                color='blue'
                icon='facebook'
                href='https://www.facebook.com/'
                title='Facebook'
              >
                facebook
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </Section>
  );
}

/* 


const [namePos, setNamePos] = useState({ x: 0, y: 0 });
  const [emailPos, setEmailPos] = useState({ x: 0, y: 0 });
  const [messagePos, setMessagePos] = useState({ x: 0, y: 0 });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [textareaPos, setTextareaPos] = useState({ x: 0, y: 0 });
  const textareaRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [textareaValue, setTextAreaValue] = useState('');

  const onChange = (e) => {
    const { target } = e;

    target.style.height = `0px`;
    target.style.height = `${target.scrollHeight}px`;

    setTextAreaValue(target.value);
  };

  const getPosition = (element) => {
    const rect = element.getBoundingClientRect();
    const { x, y } = rect;
    console.log({ element, x, y, rect }, element);
    return { x, y };
  };

  const setPositions = () => {
    setNamePos(getPosition(nameRef.current));
    // setEmailPos(getPosition(emailRef.current));
    // setMessagePos(getPosition(messageRef.current));

    setTextareaPos(getPosition(textareaRef.current));
  };

  useEffect(() => {
    setPositions();
  }, [textareaValue]);

  useEffect(() => {
    window.addEventListener('resize', setPositions);

    return () => {
      window.removeEventListener('resize', setPositions);
    };
  }, []);

  const newX = textareaPos.x - namePos.x;
  const newY = textareaPos.y - namePos.y;


*/
