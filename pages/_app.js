import 'normalize.css';
import '../styles/index.scss';
import 'react-notifications-component/dist/theme.css';
import Head from '../components/Head';
import React from 'react';
import DynamicSectionSlider from '../components/DynamicSectionSlider';
import { ReactNotifications } from 'react-notifications-component';

function MyApp(props) {
  return (
    <>
      <Head />
      <ReactNotifications isMobile={true} />
      <DynamicSectionSlider {...props} />
    </>
  );
}

export default MyApp;
