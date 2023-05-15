import React, { FC, memo } from 'react';
import SideLinks from '@components/SideLinks';
import TypeWriterText from '@components/TypeWriterText';
import styles from './styles.module.scss';
import Barrier from './components/Barrier';

const About: FC = () => {
  return (
    <>
      <main className={styles.main}>
        <TypeWriterText />
      </main>
      <footer className={styles.footer}>
        <Barrier />
      </footer>

      <SideLinks />
    </>
  );
};

export default memo(About);
