import Filter from '@components/Filter';
import React, { FC } from 'react';
import styles from './styles.module.scss';

const Portfolio: FC = () => {
  return (
    <>
      <header>
        <h1 className={styles.title}>web developer portfolio</h1>
        <h3 className={styles.description}>
          From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and
          Node.JS. Check out my latest web software development portfolio projects.
        </h3>
      </header>

      <main className={styles.main}>
        <Filter />
      </main>
    </>
  );
};

export default Portfolio;
