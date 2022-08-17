import React, { FC } from 'react';
import Button from '../components/Button';
import ContactFooter from '../components/ContactFooter';
import Section, { Props } from '../components/SectionSlider/Section';

const Project: FC<Props> = (props) => {
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
              <Button
                isClicked={false}
                color='green'
                icon='externallink'
                href='https://fox-flash-cards.herokuapp.com'
                title='Flashcards'
              >
                visit the webpage
              </Button>
            </div>
            <div className='project__links-right'>
              <Button
                isClicked={false}
                color='blue'
                icon='facebook'
                href='https://facebook.com'
                title='Facebook'
              ></Button>
              <Button
                isClicked={false}
                color='skyblue'
                icon='twitter'
                href='https://twitter.com'
                title='Twitter'
              ></Button>
              <Button
                isClicked={false}
                color='red'
                icon='googleplus'
                href='https://google.com'
                title='Google Plus'
              ></Button>
            </div>
          </div>
        </header>

        <main className='project__main'>
          <div className='project__slider'>
            <div className='project__slider-bar'>
              <h2>flashcards</h2>
            </div>
            <img src='/6.jpg' alt='' className='project__slider-item' />
          </div>
          <div className='project__slider-controls'>
            <div className='project__slider-controls-item active'></div>
            <div className='project__slider-controls-item '></div>
            <div className='project__slider-controls-item '></div>
          </div>

          <section className='project__section'>
            <h2 className='project__section-header'>About this project</h2>
            <div className='project__section-devider'></div>
            <p className='project__section-paragraph'>
              Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky
              Go Desktop app is a React web application build on top of the Electron
              framework.
              <br />
              <br />
              At this project I acted as the lead UI/UX developer specialist being the
              bridge between UI/UX Design, PO and the UI development team. The main
              challenge was to reorganize the UI structure from a react-virtualized grid
              into a pure CSS one. Which improved drastically the scalability and
              maintainability of the project.
            </p>
          </section>

          <section className='project__section'>
            <h2 className='project__section-header'>Technical Sheet</h2>
            <h3 className='project__section-description'>
              Code technologies I got involved with while working on this project.
            </h3>
            <div className='project__section-devider'></div>
            <ul className='project__section-list'>
              <li className='project__section-list-item'>
                <span>UI/UX Design</span>
              </li>
              <li className='project__section-list-item'>
                <span>UI/UX Architecture</span>
              </li>
              <li className='project__section-list-item'>
                <span>UI/UX Animations</span>
              </li>
              <li className='project__section-list-item'>
                <span>HTML5 – semantic, audio, video, canvas</span>
              </li>
              <li className='project__section-list-item'>
                <span>CSS3 – preprocessed with LESS + LESSHAT</span>
              </li>
              <li className='project__section-list-item'>
                <span>Meteor.js</span>
              </li>
              <li className='project__section-list-item'>
                <span>Blaze</span>
              </li>
              <li className='project__section-list-item'>
                <span>MongoDB</span>
              </li>
            </ul>
          </section>

          <section className='project__section'>
            <h2 className='project__section-header'>Resources</h2>
            <div className='project__section-devider'></div>
            <ul className='project__section-list'>
              <li className='project__section-list-item'>
                <span>The project is online at HTTPS://ROCKET.CHAT</span>
              </li>
              <li className='project__section-list-item'>
                <span>Access the project's source on GITHUB</span>
              </li>
            </ul>
          </section>
        </main>

        <ContactFooter />
      </div>
    </Section>
  );
};

export default Project;
