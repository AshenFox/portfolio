import { routesOrderList } from '../../helpers/values';
import { Direction } from '../reducers/game/sectionSliderInitState';

export const getDir = (pathname_to: string, pathname_from: string) => {
  const pathname_to_i = routesOrderList.findIndex((el) => el.path === pathname_to);
  const pathname_from_i = routesOrderList.findIndex((el) => el.path === pathname_from);

  const diff = pathname_to_i - pathname_from_i;

  let dir: Direction = null;

  if (diff < 0) dir = 'left';
  if (diff > 0) dir = 'right';

  return dir;
};
