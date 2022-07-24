import Button from '../components/Button';
import Section from '../components/Section';

export default function Project(props) {
  return (
    <Section classNameStr={'project'} {...props}>
      <div className='page__container'>
        <header className='project__header'>
          <h1 className='project__title'>flashcards</h1>
          <h3 className='project__description'>
            Built with custom VanillaJS Web Components and written entirely on Javascript,
            this website is a showcase of my recent projects as a Full-Stack Web
            Developer.
          </h3>
          <div className='project__links'>
            <div className='project__links-left'>
              <Button isClicked={false} color='green' icon='externallink'>
                visit the webpage
              </Button>
            </div>
            <div className='project__links-right'>
              <Button isClicked={false} color='blue' icon='facebook'></Button>
              <Button isClicked={false} color='skyblue' icon='twitter'></Button>
              <Button isClicked={false} color='red' icon='googleplus'></Button>
            </div>
          </div>
        </header>

        <main className='project__main'></main>

        <footer className='project__footer'>
          <h4>Let's talk</h4>
          <span>Wanna get in touch or talk about a project?</span>
          <span>Feel free to contact me via email at rafael@caferati.me</span>
          <span>or drop a line in the form at the contact page</span>
        </footer>
      </div>
    </Section>
  );
}
