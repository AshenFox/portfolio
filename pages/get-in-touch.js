import MailIcon from '../components/icons/MailIcon';
import PersonIcon from '../components/icons/PersonIcon';
import PentosquareIcon from '../components/icons/PentosquareIcon';
import Section from '../components/Section';
import Button from '../components/Button';
import FancyLink from '../components/FancyLink';

export default function GetInTouch(props) {
  return (
    <Section classNameStr={'get-in-touch'} {...props}>
      <div className='page__container'>
        <div className='get-in-touch__container'>
          <header className='get-in-touch__header'>
            <h1 className='get-in-touch__title'>Get In Touch</h1>
            <h2 className='get-in-touch__description'>
              If you wanna get in touch, talk to me about a project collaboration or just
              say hi, fill up the awesome form below or send an email to{' '}
              <FancyLink>rafael@caferati.me</FancyLink> and ~let's talk.
            </h2>
          </header>

          <main className='get-in-touch__main'>
            <form action='' className='get-in-touch__form' onSubmit={undefined}>
              <ul className='get-in-touch__info'>
                <li className='get-in-touch__info-item'>
                  <PersonIcon />
                  <span>Fill wth your name</span>
                </li>
                <li className='get-in-touch__info-item'>
                  <MailIcon />
                  <span>Now your email address</span>
                </li>
                <li className='get-in-touch__info-item'>
                  <PentosquareIcon />
                  <span>Now write your awesome message :)</span>
                </li>
              </ul>

              <div className='get-in-touch__input'>
                <PersonIcon />
                <input type='text' placeholder='Fill with your name' />
              </div>

              <div className='get-in-touch__form-contorls'>
                <Button color='green' isActive={false}>
                  next
                </Button>
                <Button color='green' isActive={false}>
                  submit your message
                </Button>
              </div>
            </form>
          </main>

          <footer className='get-in-touch__footer'>
            <h3 className='get-in-touch__footer-header'>Let’s get social</h3>
            <p className='get-in-touch__footer-paragraph'>
              Follow my online fan page on Facebook and profiles on Twitter, GitHub and
              Linkedin.
            </p>
            <div className='get-in-touch__footer-links'>
              <Button color='grey' icon='github'>
                github
              </Button>
              <Button color='blue' icon='facebook'>
                facebook
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </Section>
  );
}
