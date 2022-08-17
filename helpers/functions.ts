import { lazy } from 'react';
import { routesOrderList } from './values';
import { Direction } from '../store/reducers/sslider/sectionSliderInitState';

export const getPath = (pathname: string, dir: 1 | -1) => {
  const pathname_i = routesOrderList.findIndex((el) => el.path === pathname);
  let new_pathname_i = (pathname_i + dir) % routesOrderList.length;
  if (new_pathname_i < 0) new_pathname_i = routesOrderList.length - 1;
  return routesOrderList.find((el, i) => i === new_pathname_i).path;
};

export const getDir = (pathname_to: string, pathname_from: string) => {
  const pathname_to_i = routesOrderList.findIndex((el) => el.path === pathname_to);
  const pathname_from_i = routesOrderList.findIndex((el) => el.path === pathname_from);

  const diff = pathname_to_i - pathname_from_i;

  let dir: Direction = null;

  if (diff < 0) dir = 'left';
  if (diff > 0) dir = 'right';

  return dir;
};

/* export const lazyWithPreload = (factory) => {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
}; */
