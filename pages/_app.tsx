import 'normalize.css';
import '@styles/index.scss';
import 'react-notifications-component/dist/theme.css';
import Head from '@modules/Head';
import store from '@store/store';
import React, { FC, memo, useEffect } from 'react';
import SectionSlider from '@components/SectionSlider';
import { ReactNotifications } from 'react-notifications-component';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition';
import { useCasheThumbnails } from '@modules/Portfolio';

const MyApp: FC<AppProps> = props => {
  // Fix for the stylesheet vanishing during page transition
  useNextCssRemovalPrevention();
  // Cashe thumbnails
  useCasheThumbnails();

  return (
    <>
      <Head />
      <Provider store={store}>
        <ReactNotifications isMobile={true} />
        <SectionSlider {...props} />
      </Provider>
    </>
  );
};

export default memo(MyApp);
