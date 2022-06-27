import Button from '../components/Button';
import Section from '../components/Section';

export default function Home(props) {
  return (
    <Section classNameStr={'home'} {...props}>
      <main className='home__container'>
        <h1 className='home__greeting'>Hello, my name is Rafael Caferati.</h1>
        <h4 className='home__description'>
          I am an{' '}
          <span className='home__link'>
            <span className='home__link-text'>award-winning</span>
          </span>{' '}
          full-stack web developer and UI/UX javascript specialist.
        </h4>
        <h4 className='home__description'>
          Check out my articles, React and React Native UI components at the{' '}
          <span className='home__link'>
            <span className='home__link-text'>code laboratory</span>
          </span>
          .
        </h4>
        <h4 className='home__description'>
          Feel free to take a look at my latest projects on the{' '}
          <span className='home__link'>
            <span className='home__link-text'>web portfolio page</span>
          </span>
          .
        </h4>
        <h4 className='home__description'>
          Remotely available UTC−1 to UTC+8.{' '}
          <span className='home__link'>
            <span className='home__link-text'>rafael@caferati.me</span>
          </span>
          <b className='home__cursor'>_</b>
        </h4>
      </main>
      <footer className='home__footer'>
        <Button isClicked={false} />
      </footer>
    </Section>
  );
}
