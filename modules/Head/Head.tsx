import React, { FC, memo } from 'react';
import NextHead from 'next/head';

const Head: FC = () => {
  return (
    <NextHead>
      <title>Portfolio</title>
      <meta
        name='description'
        content='Portfolio application that showcases recent projects of Kavokin Maxim'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </NextHead>
  );
};

export default memo(Head);
