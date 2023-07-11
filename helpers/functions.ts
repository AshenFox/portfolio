import { IRoute, routesOrderList, TRoutesArr, TTitle } from './values';
import { iNotification, Store } from 'react-notifications-component';
import styles from './styles.module.scss';

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

  if (!upper_level_path) upper_level_path = '/';

  return { upper_level_path, title, level };
};

const pathAnalyse = (pathname_arr: string[]) => {
  let current_level: TRoutesArr = routesOrderList;
  let upper_level: TRoutesArr = routesOrderList;
  let level: TRoutesArr = routesOrderList;
  const indecies: number[] = [];

  const valid = pathname_arr.every((part, i, arr) => {
    const newIndex = current_level?.findIndex(route => route.path === part) ?? -1;
    indecies.push(newIndex);

    if (newIndex >= 0) {
      const newLevel = level[newIndex].inbed;

      if (newLevel && arr.length - 1 !== i) {
        upper_level = level;
        level = newLevel;
      }

      current_level = newLevel;

      return true;
    }

    if (i < arr.length - 1) {
      level = upper_level;
      current_level = null;
    }

    return false;
  });

  const hasNeighbors = !!current_level;

  return {
    valid,
    level,
    hasNeighbors,
    indecies,
  };
};

export const getPath = (pathname: string, dir: 1 | -1) => {
  const pathname_arr = pathname.split(/(?=\/)/g);

  let path: string = '';
  let title: TTitle = '';
  let deadend: boolean = false;

  const { valid, level, indecies, hasNeighbors } = pathAnalyse(pathname_arr);

  const valid_indecies = indecies.filter(el => el !== -1);
  const last_valid_index = valid_indecies[valid_indecies.length - 1];

  let route: IRoute;

  if (valid) {
    route = level[last_valid_index + dir];

    if (route) {
      path = [...pathname_arr.slice(0, pathname_arr.length - 1), route.path].join('');
      title = route.title;
    } else {
      deadend = true;
    }
  } else {
    if (hasNeighbors) {
      route = level[0];

      path = [...pathname_arr.slice(0, valid_indecies.length), route?.path].join('');
      title = route?.title;

      if (dir === -1) deadend = true;
    } else {
      route = level[last_valid_index];

      path = [...pathname_arr.slice(0, valid_indecies.length)].join('');
      title = route?.title;

      if (dir === 1) deadend = true;
    }
  }

  // default path
  if (!deadend && !path) {
    const mainRoute = routesOrderList[0];
    path = mainRoute.path;
    title = mainRoute.title;
  }

  return {
    path,
    title,
    deadend,
  };
};

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
