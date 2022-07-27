import Button from '../components/Button';
import FancyLink from '../components/FancyLink';
import Section from '../components/Section';

export default function About(props) {
  return (
    <Section classNameStr={'about'} {...props}>
      <main className='about__container'>
        <h1 className='about__greeting'>Hello, my name is Rafael Caferati.</h1>
        <h4 className='about__description'>
          I am an{' '}
          <FancyLink href='/portfolio' classStr='about__link' title={'Portfolio'}>
            award-winning
          </FancyLink>{' '}
          full-stack web developer and UI/UX javascript specialist.
        </h4>
        <h4 className='about__description'>
          Check out my articles, React and React Native UI components at the{' '}
          <FancyLink href='/portfolio' classStr='about__link' title={'Portfolio'}>
            code laboratory
          </FancyLink>
          .
        </h4>
        <h4 className='about__description'>
          Feel free to take a look at my latest projects on the{' '}
          <FancyLink href='/portfolio' classStr='about__link' title={'Portfolio'}>
            web portfolio page
          </FancyLink>
          .
        </h4>
        <h4 className='about__description'>
          Remotely available UTC−1 to UTC+8.{' '}
          <FancyLink href='/contact-page' classStr='about__link'>
            rafael@caferati.me
          </FancyLink>
          <b className='about__cursor'>_</b>
        </h4>
      </main>
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
}
