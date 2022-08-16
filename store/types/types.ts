import { Direction } from '../reducers/game/sectionSliderInitState';

// sslider
export const SET_CONTENT_LOADED = 'SET_CONTENT_LOADED';
export const SET_CONTENT_LOADER_ISAPPEARING = 'SET_CONTENT_LOADER_ISAPPEARING';
export const SET_CONTENT_LOADER_ISEXITED = 'SET_CONTENT_LOADER_ISEXITED';
export const SET_SHOW_SECTION_LOADER = 'SET_SHOW_SECTION_LOADER';
export const SET_SHOW_NAVIGATION = 'SET_SHOW_NAVIGATION';
export const SET_SHOW_MENU = 'SET_SHOW_MENU';
export const SET_DIRECTION = 'SET_DIRECTION';
// export const SET_IMMEDIATE_TRANSITION = 'SET_IMMEDIATE_TRANSITION';

export interface SetContentLoadedAction {
  type: typeof SET_CONTENT_LOADED;
  payload: {
    value: boolean;
  };
}

export interface SetContentLoaderIsappearingAction {
  type: typeof SET_CONTENT_LOADER_ISAPPEARING;
  payload: {
    value: boolean;
  };
}

export interface SetContentLoaderIsexitedAction {
  type: typeof SET_CONTENT_LOADER_ISEXITED;
  payload: {
    value: boolean;
  };
}

export interface SetShowSectionLoaderAction {
  type: typeof SET_SHOW_SECTION_LOADER;
  payload: {
    value: boolean;
  };
}

export interface SetShowNavigationAction {
  type: typeof SET_SHOW_NAVIGATION;
  payload: {
    value: boolean;
  };
}

export interface SetShowMenuAction {
  type: typeof SET_SHOW_MENU;
  payload: {
    value: boolean;
  };
}

export interface SetDirectionAction {
  type: typeof SET_DIRECTION;
  payload: {
    value: Direction;
  };
}

export type SectionSliderActions =
  | SetContentLoadedAction
  | SetContentLoaderIsappearingAction
  | SetContentLoaderIsexitedAction
  | SetShowSectionLoaderAction
  | SetShowNavigationAction
  | SetShowMenuAction
  | SetDirectionAction;

// ===========

export type AppActions = SectionSliderActions;
