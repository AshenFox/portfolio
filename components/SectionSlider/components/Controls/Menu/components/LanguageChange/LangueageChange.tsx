import React, { FC, useCallback, useEffect, useState } from 'react';
import { useActions, useAppSelector } from 'store/hooks';
import styles from './styles.module.scss';

const LangueageChange: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  const { change_language } = useActions();

  useEffect(() => {
    const { language } = navigator;
    console.log('Fire!');
    if (/^ru/.test(language)) change_language('RU');
    if (/^en/.test(language)) change_language('ENG');
  }, [change_language]);

  const onRUClick = useCallback(() => change_language('RU'), [change_language]);
  const onENGClick = useCallback(() => change_language('ENG'), [change_language]);

  return (
    <ul className={styles.language_change}>
      <li className={styles.option + ' ' + (language === 'ENG' ? styles.active : '')}>
        <button onClick={onENGClick}>ENG</button>
      </li>
      <li className={styles.option + ' ' + (language === 'RU' ? styles.active : '')}>
        <button onClick={onRUClick}>RU</button>
      </li>
    </ul>
  );
};

export default LangueageChange;
