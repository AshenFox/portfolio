import { lazy } from 'react';
import { routesOrderList, TRoutesArr } from './values';
import { Direction } from '../store/reducers/sslider/sectionSliderInitState';
import { iNotification, Store } from 'react-notifications-component';

export const getUpperLevelPath = (pathname: string) => {
  let upper_level_path = '';
  let level = 0;

  const search = (
    routesOrder: TRoutesArr,
    parent_path: string = '/',
    i: number = 0
  ): boolean => {
    return !!routesOrder.find(el => {
      let found_path = (parent_path + el.path).replace('//', '/');

      if (found_path === pathname) {
        level = i;
        upper_level_path = parent_path;
        return true;
      } else {
        if (el.inbed) {
          return search(el.inbed, found_path, i + 1);
        }
      }

      return false;
    });
  };

  search(routesOrderList);

  return { upper_level_path, level };
};

export const getPath = (pathname: string, dir: 1 | -1) => {
  const pathname_arr = pathname.split(/(?=\/)/g);

  let routes_list = routesOrderList;
  let new_pathname = '';

  for (let i in pathname_arr) {
    if (!routes_list) break;

    const pathname_part = pathname_arr[i];

    const { length } = pathname_arr;
    const is_last = length === +i + 1;

    const route_i = routes_list.findIndex(el => el.path === pathname_part);

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

  return new_pathname ? new_pathname : '/';
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
