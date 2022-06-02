import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const routes = [{ path: '/' }, { path: '/about' }, { path: '/testpage' }];

export const useDir = () => {
  const { pathname, query } = useRouter();

  const { from = pathname } = query;

  const pathname_i = routes.findIndex((el) => el.path === pathname);
  const from_i = routes.findIndex((el) => el.path === from);

  const diff = pathname_i - from_i;

  let dir = null;
  if (diff < 0) dir = 'left';
  if (diff > 0) dir = 'right';

  return { dir, pathname };
};
