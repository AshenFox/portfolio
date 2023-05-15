import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Section, SectionProps } from '@components/SectionSlider';

const ContactSection: FC<SectionProps> = props => {
  const { children } = props;

  return (
    <Section classNameStr={styles.contact_section} {...props}>
      {children}
    </Section>
  );
};

export default ContactSection;
