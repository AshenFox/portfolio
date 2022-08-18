import { lazy } from 'react';
import { routesOrderList } from './values';
import { Direction } from '../store/reducers/sslider/sectionSliderInitState';
import { iNotification, Store } from 'react-notifications-component';

export const getPath = (pathname: string, dir: 1 | -1) => {
  const pathname_i = routesOrderList.findIndex((el) => el.path === pathname);
  let new_pathname_i = (pathname_i + dir) % routesOrderList.length;
  if (new_pathname_i < 0) new_pathname_i = routesOrderList.length - 1;
  return routesOrderList.find((el, i) => i === new_pathname_i).path;
};

export const addCustomNotification = (custom_options: Partial<iNotification>) => {
  Store.addNotification({
    ...custom_options,
    insert: 'top',
    animationIn: ['notification__fadeIn'],
    animationOut: ['notification__fadeOut'],
    dismiss: {
      duration: 5000,
      waitForAnimation: true,
    },
    container: 'top-center',
  });
};

export const removeNotification = (id: string) => Store.removeNotification(id);
