import ContactForm from '@components/ContactForm';
import FancyLink from '@ui/FancyLink';
import { Link } from '@ui/InteractiveElement';
import React, { FC } from 'react';
import styles from './styles.module.scss';
import content from './content.json';
import { useAppSelector } from 'store/hooks';

const Contact: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{content[language].header.title}</h1>
        <h2 className={styles.description}>
          {content[language].header.description.map(el => {
            if (el.type === 'link') {
              return <FancyLink>{el.text}</FancyLink>;
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
          <Link color='grey' icon='github' href='https://github.com/' title='Github'>
            github
          </Link>
          <Link
            color='blue'
            icon='facebook'
            href='https://www.facebook.com/'
            title='Facebook'
          >
            facebook
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Contact;
