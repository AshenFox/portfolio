import ContactForm from '@components/ContactForm';
import FancyLink from '@ui/FancyLink';
import { Link } from '@ui/InteractiveElement';
import React, { FC, memo } from 'react';
import styles from './styles.module.scss';
import content from './content';
import { useAppSelector } from '@store/hooks';

const Contact: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{content[language].header.title}</h1>
        <h2 className={styles.description}>
          {content[language].header.description.map((el, i) => {
            if (el.type === 'link') {
              return (
                <FancyLink key={i} copy={el.href}>
                  {el.text}
                </FancyLink>
              );
            }

            return el.text;
          })}
        </h2>
      </header>

      <main className={styles.main}>
        <ContactForm />
      </main>

      <footer>
        <h3 className={styles.footer_header}>{content[language].footer.header}</h3>
        <p className={styles.footer_paragraph}>{content[language].footer.paragraph}</p>
        <div className={styles.footer_links}>
          <Link
            color='grey'
            icon='github'
            href='https://github.com/AshenFox'
            title='Github'
          >
            github
          </Link>
          <Link
            color='lightblue'
            icon='linkedin'
            href='https://www.linkedin.com/in/max-kavokin-46a667254/'
            title='LinkedIn'
          >
            linkedin
          </Link>
        </div>
      </footer>
    </>
  );
};

export default memo(Contact);
