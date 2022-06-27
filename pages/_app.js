import 'normalize.css';
import '../styles/index.scss';
import Head from '../components/Head';
import React from 'react';
import DynamicSectionSlider from '../components/DynamicSectionSlider';

function MyApp(props) {
  return (
    <>
      <Head />
      <DynamicSectionSlider {...props} />
    </>
  );
}

export default MyApp;
