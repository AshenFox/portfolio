import ImageSlider from '@components/ImageSlider';
import { Link } from '@ui/InteractiveElement';
import { useRouter } from 'next/router';
import React, { FC, useRef } from 'react';
import styles from './styles.module.scss';

const Project: FC = () => {
  const { query, isReady } = useRouter();

  const { _id } = query;

  const _idRef = useRef<string | string[]>();
  if (_id && !_idRef.current) _idRef.current = _id;

  return (
    <>
      <header>
        <h1 className={styles.title}>{_idRef.current}</h1>
        <h3 className={styles.description}>
          Built with custom VanillaJS Web Components and written entirely on Javascript,
          this website is a showcase of my recent projects as a Full-Stack Web Developer.
        </h3>
        <div className={styles.links}>
          <div>
            <Link
              color='green'
              icon='externallink'
              href='https://fox-flash-cards.herokuapp.com'
              title='Flashcards'
            >
              visit the webpage
            </Link>
          </div>
          <div className={styles.links_right}>
            <div className={styles.links_hide}>
              <Link
                color='blue'
                icon='facebook'
                href='https://facebook.com'
                title='Facebook'
                classStr='hide'
              ></Link>
              <Link
                color='skyblue'
                icon='twitter'
                href='https://twitter.com'
                title='Twitter'
                classStr='hide'
              ></Link>
            </div>

            <Link
              color='red'
              icon='googleplus'
              href='https://google.com'
              title='Google Plus'
            ></Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <ImageSlider />

        <section className={styles.section}>
          <h2 className={styles.section_header}>About this project</h2>
          <div className={styles.section_devider}></div>
          <p className={styles.section_paragraph}>
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

        <section className={styles.section}>
          <h2 className={styles.section_header}>Technical Sheet</h2>
          <h3 className={styles.section_description}>
            Code technologies I got involved with while working on this project.
          </h3>
          <div className={styles.section_devider}></div>
          <ul className={styles.section_list}>
            <li className={styles.section_list_item}>
              <span>UI/UX Design</span>
            </li>
            <li className={styles.section_list_item}>
              <span>UI/UX Architecture</span>
            </li>
            <li className={styles.section_list_item}>
              <span>UI/UX Animations</span>
            </li>
            <li className={styles.section_list_item}>
              <span>HTML5 – semantic, audio, video, canvas</span>
            </li>
            <li className={styles.section_list_item}>
              <span>CSS3 – preprocessed with LESS + LESSHAT</span>
            </li>
            <li className={styles.section_list_item}>
              <span>Meteor.js</span>
            </li>
            <li className={styles.section_list_item}>
              <span>Blaze</span>
            </li>
            <li className={styles.section_list_item}>
              <span>MongoDB</span>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_header}>Resources</h2>
          <div className={styles.section_devider}></div>
          <ul className={styles.section_list}>
            <li className={styles.section_list_item}>
              <span>The project is online at HTTPS://ROCKET.CHAT</span>
            </li>
            <li className={styles.section_list_item}>
              <span>Access the project&apos;s source on GITHUB</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Project;
