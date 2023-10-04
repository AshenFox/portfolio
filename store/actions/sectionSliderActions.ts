import { AppActions, SET_MENU_IS_EXITED } from '../types/types';
import { ThunkActionApp } from '../store';
import {
  SET_CONTENT_LOADED,
  SET_CONTENT_LOADER_ISAPPEARING,
  SET_CONTENT_LOADER_ISEXITED,
  SET_SHOW_SECTION_LOADER,
  SET_SHOW_NAVIGATION,
  SET_SHOW_MENU,
  SET_DIRECTION,
} from '../types/types';
import { getDir } from '../helpers/functions';

// SET_CONTENT_LOADED
export const set_content_loaded = (value: boolean): AppActions => ({
  type: SET_CONTENT_LOADED,
  payload: {
    value,
  },
});

// SET_CONTENT_LOADER_ISAPPEARING
export const set_content_loader_isappearing = (value: boolean): AppActions => ({
  type: SET_CONTENT_LOADER_ISAPPEARING,
  payload: {
    value,
  },
});

// SET_CONTENT_LOADER_ISEXITED
export const set_content_loader_isexited = (value: boolean): AppActions => ({
  type: SET_CONTENT_LOADER_ISEXITED,
  payload: {
    value,
  },
});

// SET_SHOW_SECTION_LOADER
export const set_show_section_loader = (value: boolean): AppActions => ({
  type: SET_SHOW_SECTION_LOADER,
  payload: {
    value,
  },
});

// SET_SHOW_NAVIGATION
export const set_show_navigation = (value: boolean): AppActions => ({
  type: SET_SHOW_NAVIGATION,
  payload: {
    value,
  },
});

// SET_SHOW_MENU
export const set_show_menu = (value: boolean): AppActions => ({
  type: SET_SHOW_MENU,
  payload: {
    value,
  },
});

// SET_MENU_IS_EXITED
export const set_menu_is_exited = (value: boolean): AppActions => ({
  type: SET_MENU_IS_EXITED,
  payload: {
    value,
  },
});

// SET_DIRECTION
export const set_direction = (pathname_to: string, pathname_from: string): AppActions => {
  const dir = getDir(pathname_to, pathname_from);

  return {
    type: SET_DIRECTION,
    payload: {
      value: dir,
    },
  };
};

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
