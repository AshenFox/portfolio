import 'normalize.css';
import '@styles/index.scss';
import 'react-notifications-component/dist/theme.css';
import Head from '@modules/Head';
import store from '@store/store';
import React, { FC, memo } from 'react';
import SectionSlider from '@components/SectionSlider';
import { ReactNotifications } from 'react-notifications-component';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const MyApp: FC<AppProps> = props => (
  <>
    <Head />
    <Provider store={store}>
      <ReactNotifications isMobile={true} />
      <SectionSlider {...props} />
    </Provider>
  </>
);

export default memo(MyApp);
