import { lazy } from 'react';
import { routesOrderList, TRoutesArr } from './values';
import { Direction } from '../store/reducers/sslider/sectionSliderInitState';
import { iNotification, Store } from 'react-notifications-component';

/* export const getPath = (pathname: string, dir: 1 | -1) => {
  const pathname_i = routesOrderList.findIndex((el) => el.path === pathname); // find index and array of routes
  let new_pathname_i = (pathname_i + dir) % routesOrderList.length; // find new pathname according in the found array of routes
  if (new_pathname_i < 0) new_pathname_i = routesOrderList.length - 1;
  return routesOrderList.find((el, i) => i === new_pathname_i).path; // if it's the end of an array return false value
}; */

export const getPath = (pathname: string, dir: 1 | -1) => {
  // console.log(pathname);

  const pathname_arr = pathname.split(/(?=\/)/g);

  let routes_list = routesOrderList;
  let new_pathname = '';

  for (let i in pathname_arr) {
    if (!routes_list) break;

    const pathname_part = pathname_arr[i];

    const { length } = pathname_arr;
    const is_last = length === +i + 1;

    const route_i = routes_list.findIndex((el) => el.path === pathname_part);

    if (route_i < 0) break;

    if (is_last) {
      const { length } = routes_list;
      let new_route_i = route_i + dir;

      if (length < new_route_i + 1) new_route_i = length - 1;
      else if (new_route_i < 0) new_route_i = 0;

      new_pathname += routes_list[new_route_i].path;

      break;
    } else {
      new_pathname += routes_list[route_i].path;
      routes_list = routes_list[route_i].inbed;

      continue;
    }
  }

  // console.log(new_pathname);

  return new_pathname ? new_pathname : '/';
};

// console.log(getPath('/portfolio/portfolio', 1));

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
