import ImageSlider from '@components/ImageSlider';
import { Link } from '@ui/InteractiveElement';
import { useRouter } from 'next/router';
import React, { FC, useRef } from 'react';
import styles from './styles.module.scss';
import content from './content.json';
import { useAppSelector } from 'store/hooks';
import Sections from './components/Sections';

const Project: FC = () => {
  const { query, isReady } = useRouter();

  const language = useAppSelector(({ language }) => language.language);

  const { _id } = query;

  const _idRef = useRef<string | string[]>();
  if (_id && !_idRef.current) _idRef.current = _id;

  return (
    <>
      <header>
        <h1 className={styles.title}>{_idRef.current}</h1>
        <h3 className={styles.description}>{content[language].description}</h3>
        <div className={styles.links}>
          <div>
            <Link
              color='green'
              icon='externallink'
              href={content[language].link.href}
              title='Flashcards'
            >
              {content[language].link.content}
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
              />
              <Link
                color='skyblue'
                icon='twitter'
                href='https://twitter.com'
                title='Twitter'
                classStr='hide'
              />
            </div>

            <Link
              color='red'
              icon='googleplus'
              href='https://google.com'
              title='Google Plus'
            />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <ImageSlider images={content[language].images} />
        <Sections sections={content[language].sections} />
      </main>
    </>
  );
};

export default Project;
