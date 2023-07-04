//intermediate changes
import { useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import { Section } from '@components/SectionSlider';
import PageContainer from '@ui/PageContainer';

const Custom404 = props => {
  console.log('render');
  return (
    <Section {...props}>
      <PageContainer>
        <h1>404</h1>
        <h2>Page does not exist</h2>
      </PageContainer>
    </Section>
  );
};

export default memo(Custom404);
