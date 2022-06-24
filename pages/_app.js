import 'normalize.css';
import '../styles/index.scss';
import Head from '../components/Head';
import React from 'react';
import DynamicSectionSlider from '../components/DynamicSectionSlider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <DynamicSectionSlider Component={Component} pageProps={pageProps} />
    </>
  );
}

export default MyApp;
