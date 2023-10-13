import React, { FC, useCallback, useEffect, memo } from 'react';
import { useActions, useAppSelector } from '@store/hooks';
import styles from './styles.module.scss';
import content from './content';

const LanguageChange: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  const { change_language } = useActions();

  useEffect(() => {
    const { language } = navigator;
    const cachedLanguage = localStorage?.getItem('language');

    if (/^ru/.test(language) || cachedLanguage === 'RU') {
      change_language('RU');
    } else if (/^en/.test(language) || cachedLanguage === 'ENG') {
      change_language('ENG');
    } else {
      change_language('ENG');
    }
  }, [change_language]);

  const onRUClick = useCallback(() => change_language('RU'), [change_language]);
  const onENGClick = useCallback(() => change_language('ENG'), [change_language]);

  return (
    <ul className={styles.language_change}>
      <li className={styles.option + ' ' + (language === 'ENG' ? styles.active : '')}>
        <button onClick={onENGClick}>{content[language].ENG}</button>
      </li>
      <li className={styles.option + ' ' + (language === 'RU' ? styles.active : '')}>
        <button onClick={onRUClick}>{content[language].RU}</button>
      </li>
    </ul>
  );
};

export default memo(LanguageChange);
