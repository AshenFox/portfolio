import 'normalize.css';
import '../styles/index.scss';
import 'react-notifications-component/dist/theme.css';
import Head from '../components/Head';
import store from '../store/store';
import React, { FC } from 'react';
import DynamicSectionSlider from '../components/DynamicSectionSlider';
import { ReactNotifications } from 'react-notifications-component';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const MyApp: FC<AppProps> = (props) => (
  <>
    <Head />
    <Provider store={store}>
      <ReactNotifications isMobile={true} />
      <DynamicSectionSlider {...props} />
    </Provider>
  </>
);

export default MyApp;