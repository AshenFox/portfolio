import React, { FC, memo, ReactNode, useCallback } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { addCustomNotification } from '@helpers/functions';
import content from './content';
import { useAppSelector } from '@store/hooks';

type Props = {
  children: ReactNode;
  href?: string;
  classStr?: string;
  title?: string;
  thin?: boolean;
  copy?: string;
};

const FancyLink: FC<Props> = ({
  children,
  href = '',
  classStr = '',
  title = '',
  thin,
  copy,
}) => {
  const language = useAppSelector(({ language }) => language.language);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copy);

      addCustomNotification({
        message: content[language].success,
        type: 'info',
        id: '6',
      });
    } catch (err) {
      console.error('Failed to copy: ', err);

      addCustomNotification({
        message: content[language].error,
        type: 'danger',
        id: '7',
      });
    }
  }, [copy, language]);

  const isCopy = !!copy;

  return (
    <Link href={isCopy ? '' : href} legacyBehavior>
      <a title={title} onClick={isCopy ? copyToClipboard : undefined}>
        <span className={`${styles.fancy_link} ${classStr}`}>
          <span className={`${styles.text} ${thin ? styles.thin : ''}`}>{children}</span>
        </span>
      </a>
    </Link>
  );
};

export default memo(FancyLink);
