import React, { FC, memo } from 'react';
import styles from './styles.module.scss';
import content from './content';
import { useAppSelector } from '@store/hooks';

type Props = {
  message?: string;
};

const NotFound: FC<Props> = ({ message }) => {
  const language = useAppSelector(({ language }) => language.language);

  const defaultMessage = content[language].default_message;

  return (
    <div className={styles.not_found}>
      <h1>404</h1>
      <h2>{message ?? defaultMessage}</h2>
    </div>
  );
};

export default memo(NotFound);
