import React, { FC, memo } from 'react';
import { SectionProps } from '@components/SectionSlider';
import PageContainer from '@ui/PageContainer';
import Contact, { ContactSection } from '@modules/Contact';

const ContactPage: FC<SectionProps> = props => {
  return (
    <ContactSection {...props}>
      <PageContainer>
        <Contact />
      </PageContainer>
    </ContactSection>
  );
};

export default memo(ContactPage);
