import React, { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  sections: {
    header: string;
    paragraph?: string;
    description?: string;
    list?: string[];
  }[];
};

const Sections: FC<Props> = ({ sections }) => {
  return (
    <>
      {sections.map((section, i) => {
        const { header, description, paragraph, list } = section;

        return (
          <section key={i} className={styles.section}>
            <h2 className={styles.header}>{header}</h2>
            {description && <h3 className={styles.description}>{description}</h3>}
            {(paragraph || list) && <div className={styles.devider}></div>}
            {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
            {list && (
              <ul className={styles.list}>
                {section.list.map((element, i) => {
                  return (
                    <li key={i} className={styles.list_item}>
                      <span>{element}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        );
      })}
    </>
  );
};

export default Sections;

/* <section className={styles.section}>
          <h2 className={styles.section_header}>About this project</h2>
          <div className={styles.section_devider}></div>
          <p className={styles.section_paragraph}>
            {
              'Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.\n\nAt this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.'
            }
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
        </section> */
