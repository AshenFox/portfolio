import { TRoutesArr, routesOrderList } from '@helpers/values';
import { Direction } from '../reducers/sslider/sectionSliderInitState';

const getIndex = (pathname_arr: string[]): number | null => {
  let index: number = 0;
  let routes_list: TRoutesArr | undefined = routesOrderList;

  const exists = pathname_arr.every(part => {
    const newIndex = routes_list?.findIndex(route => route.path === part);

    if (newIndex >= 0) {
      index = newIndex;
      routes_list = routes_list[newIndex].inbed;
      return true;
    } else {
      return false;
    }
  });

  if (exists) return index;

  return null;
};

export const getDir = (pathname_from: string, pathname_to: string): Direction => {
  const pathname_to_arr = pathname_to.split(/(?=\/)/g);
  const pathname_from_arr = pathname_from.split(/(?=\/)/g);
  const length_to = pathname_to_arr.length;
  const length_from = pathname_from_arr.length;

  // determine if both path are valid
  const index_to = getIndex(pathname_to_arr);
  const index_from = getIndex(pathname_from_arr);
  // if both or one are invalid
  // determine which is deeper and get direction based on that

  if (length_from > length_to) {
    return 'right';
  } else if (length_from < length_to) {
    return 'left';
  }

  if (index_to === null || index_from === null) {
    return 'right';
  }

  // if both are valid get according to the routes order
  if (index_from === index_to) {
    return 'right';
  }

  if (index_from > index_to) {
    return 'right';
  }

  return 'left';
};
