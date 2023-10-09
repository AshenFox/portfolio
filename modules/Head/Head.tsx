import React, { FC } from 'react';
import NextHead from 'next/head';

const Head: FC = () => {
  return (
    <NextHead>
      <title>Portfolio</title>
      <meta
        name='description'
        content='Portfolio application that showcases recent projects of Kavokin Maxim'
      />
    </NextHead>
  );
};

export default Head;
