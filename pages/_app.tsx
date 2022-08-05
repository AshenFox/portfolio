import 'normalize.css';
import '../styles/index.scss';
import 'react-notifications-component/dist/theme.css';
import Head from '../components/Head';
import React, { FC } from 'react';
import DynamicSectionSlider from '../components/DynamicSectionSlider';
import { ReactNotifications } from 'react-notifications-component';
import { AppProps } from 'next/app';

const MyApp: FC<AppProps> = (props) => (
  <>
    <Head />
    <ReactNotifications isMobile={true} />
    <DynamicSectionSlider {...props} />
  </>
);

export default MyApp;
