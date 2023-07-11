import { memo, FC } from 'react';
import { Section, SectionProps } from '@components/SectionSlider';
import PageContainer from '@ui/PageContainer';
import ContactFooter from '@components/ContactFooter';
import type { GetStaticProps } from 'next';
import NotFound from '@modules/NotFound';

export const getStaticProps: GetStaticProps<Record<string, never>> = () => {
  return { props: {} };
};

const Custom404: FC<SectionProps> = props => {
  return (
    <Section {...props}>
      <PageContainer>
        <NotFound />
        <ContactFooter />
      </PageContainer>
    </Section>
  );
};

export default memo(Custom404);
