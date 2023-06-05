import React, { FC, memo } from 'react';
import { useAppSelector } from '@store/hooks';
import FancyLink from '@ui/FancyLink';
import styles from './styles.module.scss';
import content from './content';

const ContactFooter: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  return (
    <footer className={styles.contactfooter}>
      <h4>{content[language].header}</h4>
      {content[language].paragraphs.map((p, i) => {
        const { text, link } = p;

        return (
          <p key={i}>
            {text}
            {link && (
              <FancyLink href={link.href} title={link.title}>
                {link.text}
              </FancyLink>
            )}
          </p>
        );
      })}
    </footer>
  );
};

export default memo(ContactFooter);
