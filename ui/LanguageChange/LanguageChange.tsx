import React, { FC, useCallback, useEffect, memo } from 'react';
import { useActions, useAppSelector } from 'store/hooks';
import styles from './styles.module.scss';
import content from './content.json';

const LanguageChange: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  const { change_language } = useActions();

  useEffect(() => {
    const { language } = navigator;
    if (/^ru/.test(language)) change_language('RU');
    if (/^en/.test(language)) change_language('ENG');
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
