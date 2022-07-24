import Button from '../components/Button';
import Section from '../components/Section';

export default function About(props) {
  return (
    <Section classNameStr={'about'} {...props}>
      <main className='about__container'>
        <h1 className='about__greeting'>Hello, my name is Rafael Caferati.</h1>
        <h4 className='about__description'>
          I am an{' '}
          <span className='about__link'>
            <span className='about__link-text'>award-winning</span>
          </span>{' '}
          full-stack web developer and UI/UX javascript specialist.
        </h4>
        <h4 className='about__description'>
          Check out my articles, React and React Native UI components at the{' '}
          <span className='about__link'>
            <span className='about__link-text'>code laboratory</span>
          </span>
          .
        </h4>
        <h4 className='about__description'>
          Feel free to take a look at my latest projects on the{' '}
          <span className='about__link'>
            <span className='about__link-text'>web portfolio page</span>
          </span>
          .
        </h4>
        <h4 className='about__description'>
          Remotely available UTC−1 to UTC+8.{' '}
          <span className='about__link'>
            <span className='about__link-text'>rafael@caferati.me</span>
          </span>
          <b className='about__cursor'>_</b>
        </h4>
      </main>
      <footer className='about__footer'>
        <Button isClicked={false} color='red' isBig={true}>
          destroy this webpage
        </Button>
      </footer>
    </Section>
  );
}
