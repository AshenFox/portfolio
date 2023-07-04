//intermediate changes
import { routesOrderList, TRoutesArr, TTitle } from './values';
import { iNotification, Store } from 'react-notifications-component';
import styles from './styles.module.scss';

/* export const getUpperLevelPath = (pathname: string) => {
  let upper_level_path = '';
  let level = 0;
  let title: TTitle = null;

  const search = (
    routesOrder: TRoutesArr,
    parent_path: string = '/',
    parent_title: TTitle = null,
    i: number = 0
  ): boolean => {
    return !!routesOrder.find(el => {
      let found_path = (parent_path + el.path).replace('//', '/');

      if (found_path === pathname) {
        level = i;
        upper_level_path = parent_path;
        title = parent_title;
        return true;
      } else {
        if (el.inbed) {
          const inbed_search_res = search(el.inbed, found_path, el.title, i + 1);
          return inbed_search_res;
        }
      }

      return false;
    });
  };

  search(routesOrderList);

  return { upper_level_path, title, level };
}; */

export const getUpperLevelPath = (pathname: string) => {
  let upper_level_path = '';
  let level = 0;
  let title: TTitle = null;

  const full_pathname_arr = pathname.split(/(?=\/)/g);
  const upper_level_pathname_arr = full_pathname_arr.slice(
    0,
    full_pathname_arr.length - 1
  );

  let routes_list = routesOrderList;

  for (let i in upper_level_pathname_arr) {
    if (!routes_list) break;

    const pathname_part = upper_level_pathname_arr[i];

    const route = routes_list.find(el => el.path === pathname_part);

    if (!route) break;

    level += 1;
    upper_level_path += route.path;
    title = route.title;
    routes_list = route.inbed;
  }

  return { upper_level_path, title, level };
};

export const getPath = (pathname: string, dir: 1 | -1) => {
  const pathname_arr = pathname.split(/(?=\/)/g);

  let prev_routes_list: TRoutesArr = null;
  let routes_list = routesOrderList;
  let res: { path: string; title: TTitle; deadend?: boolean } = {
    path: '',
    title: '',
    deadend: false,
  };

  for (let i in pathname_arr) {
    console.log({ routes_list, pathname_arr });
    if (!routes_list) {
      if (prev_routes_list) {
        res.path = prev_routes_list[0].path;
        res.title = prev_routes_list[0].title;
        res.deadend = true;
      }

      break;
    }

    const pathname_part = pathname_arr[i];

    const { length } = pathname_arr; // 3
    const is_last = length === +i + 1; // 3 === 1

    const route_i = routes_list.findIndex(el => el.path === pathname_part); // 1

    if (route_i < 0) break;

    if (is_last) {
      const { length } = routes_list;
      let new_route_i = route_i + dir;

      if (length < new_route_i + 1) new_route_i = length - 1;
      else if (new_route_i < 0) new_route_i = 0;

      res.path += routes_list[new_route_i].path;
      res.title = routes_list[new_route_i].title;

      break;
    } else {
      res.path += routes_list[route_i].path;
      res.title = routes_list[route_i].title;
      prev_routes_list = routes_list;
      routes_list = routes_list[route_i].inbed;

      continue;
    }
  }

  console.log({ res });

  /* if (!res.path) {
    res = { ...routesOrderList[0], deadend: dir === -1 };
  } */

  return res;
};

export const getPath2 = (pathname: string, dir: 1 | -1) => {
  const pathname_arr = pathname.split(/(?=\/)/g);

  let prev_routes_list: TRoutesArr = null;
  let routes_list = routesOrderList;

  let res: { path: string; title: TTitle; deadend?: boolean } = {
    path: '',
    title: '',
    deadend: false,
  };

  // determine the validity of the pathname
  // if some part of it is invalid the left arrow leads to the first item of the closest valid level
  // the right arrow leads to the first item of the current level if it exists
  // if the pathname is valid then determine the values for left and right arrows as usual

  return res;
};

/* export const pathExists = (pathname: string) => {
  let upper_level_path = '';
  let level = 0;
  let title: TTitle = null;

  const search = (
    routesOrder: TRoutesArr,
    parent_path: string = '/',
    parent_title: TTitle = null,
    i: number = 0
  ): boolean => {
    return !!routesOrder.find(el => {
      let found_path = (parent_path + el.path).replace('//', '/');

      if (found_path === pathname) {
        level = i;
        upper_level_path = parent_path;
        title = parent_title;
        return true;
      } else {
        if (el.inbed) {
          return search(el.inbed, found_path, el.title, i + 1);
        }
      }

      return false;
    });
  };

  search(routesOrderList);

  return { upper_level_path, title, level };
}; */

export const addCustomNotification = (custom_options: Partial<iNotification>) => {
  Store.addNotification({
    ...custom_options,
    insert: 'top',
    animationIn: [styles.fadeIn],
    animationOut: [styles.fadeOut],
    dismiss: {
      duration: 5000,
      waitForAnimation: true,
    },
    container: 'top-center',
  });
};

export const removeNotification = (id: string) => Store.removeNotification(id);

export const replaceRegExp = (str: string, flags?: string) =>
  new RegExp(`#${str}#`, flags);
