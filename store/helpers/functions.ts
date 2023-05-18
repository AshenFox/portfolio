import { routesOrderList } from './../../helpers/values';
import { Direction } from '../reducers/sslider/sectionSliderInitState';

/* export const getDir = (pathname_to: string, pathname_from: string) => {
  // console.log({ pathname_to, pathname_from });
  const pathname_to_i = routesOrderList.findIndex((el) => el.path === pathname_to); // Find both routes and both arrays and determine dir based on that
  const pathname_from_i = routesOrderList.findIndex((el) => el.path === pathname_from);

  const diff = pathname_to_i - pathname_from_i;

  let dir: Direction = null;

  if (diff < 0) dir = 'left';
  if (diff > 0) dir = 'right';

  return dir;
}; */

export const getDir = (pathname_to: string, pathname_from: string): Direction => {
  // Invalid links????
  const pathname_to_arr = pathname_to.split(/(?=\/)/g);
  const pathname_from_arr = pathname_from.split(/(?=\/)/g);

  const max_lendth = Math.max(pathname_from_arr.length, pathname_to_arr.length);

  let routes_list_to = routesOrderList;
  let routes_list_from = routesOrderList;
  let dir: Direction = null;

  for (let i = 0; i <= max_lendth - 1; i++) {
    if (!routes_list_to && !routes_list_from) break;
    if (!routes_list_to) {
      dir = 'left';
      break;
    }
    if (!routes_list_from) {
      dir = 'right';
      break;
    }

    const pathname_to_part = pathname_to_arr[i];
    const pathname_from_part = pathname_from_arr[i];

    const route_to_i = routes_list_to.findIndex(el => el.path === pathname_to_part);
    const route_from_i = routes_list_from.findIndex(el => el.path === pathname_from_part);

    const found_to = route_to_i >= 0;
    const found_from = route_from_i >= 0;

    if (!found_to && !found_from) break;
    if (!found_to) {
      dir = 'left';
      break;
    }
    if (!found_from) {
      dir = 'right';
      break;
    }

    routes_list_to = routes_list_to[route_to_i].inbed;
    routes_list_from = routes_list_from[route_from_i].inbed;

    if (route_to_i !== route_from_i) {
      const diff = route_to_i - route_from_i;

      if (diff < 0) dir = 'left';
      if (diff > 0) dir = 'right';

      if (routes_list_to && routes_list_from) break;
    }
  }

  return dir;
};
