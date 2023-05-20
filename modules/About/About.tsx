import React, { FC, memo, useMemo } from 'react';
import SideLinks from '@components/SideLinks';
import TypeWriterText, { THeaderDataArr } from '@components/TypeWriterText';
import styles from './styles.module.scss';
import Barrier from './components/Barrier';
import content from './content.json';
import { useAppSelector } from 'store/hooks';

const About: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  const typewriterText = useMemo(
    () => content.typewriter_text[language] as THeaderDataArr, // fix the type
    [language]
  );

  return (
    <>
      <main className={styles.main}>
        <TypeWriterText text={typewriterText} />
      </main>
      <footer className={styles.footer}>
        <Barrier />
      </footer>

      <SideLinks />
    </>
  );
};

export default memo(About);
