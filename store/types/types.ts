import { Language } from '@store/reducers/language/languageInitState';
import { FieldName } from '../reducers/form/contactFormInitState';
import { Direction } from '../reducers/sslider/sectionSliderInitState';

// sslider
export const SET_CONTENT_LOADED = 'SET_CONTENT_LOADED';
export const SET_CONTENT_LOADER_ISAPPEARING = 'SET_CONTENT_LOADER_ISAPPEARING';
export const SET_CONTENT_LOADER_ISEXITED = 'SET_CONTENT_LOADER_ISEXITED';
export const SET_SHOW_SECTION_LOADER = 'SET_SHOW_SECTION_LOADER';
export const SET_SHOW_NAVIGATION = 'SET_SHOW_NAVIGATION';
export const SET_SHOW_MENU = 'SET_SHOW_MENU';
export const SET_MENU_IS_EXITED = 'SET_MENU_IS_EXITED';
export const SET_DIRECTION = 'SET_DIRECTION';

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

export interface SetMenuIsEntering {
  type: typeof SET_MENU_IS_EXITED;
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
  | SetDirectionAction
  | SetMenuIsEntering;

// form
export const SET_TEXTAREA_VALUE = 'SET_TEXTAREA_VALUE';
export const SET_ACTIVE_FIELD_VALUE = 'SET_ACTIVE_FIELD_VALUE';
export const SET_ACTIVE_FIELD = 'SET_ACTIVE_FIELD';
export const SET_ACTIVE_FIELD_ISERROR = 'SET_ACTIVE_FIELD_ISERROR';
export const SET_ACTIVE_FIELD_TRANSITIONED = 'SET_ACTIVE_FIELD_TRANSITIONED';
export const GO_TO_NEXT = 'GO_TO_NEXT';
export const CHANGE_ACTIVE_FIELD = 'CHANGE_ACTIVE_FIELD';

export interface SetTextareaValueAction {
  type: typeof SET_TEXTAREA_VALUE;
  payload: {
    value: string;
  };
}

export interface SetFormFieldValueAction {
  type: typeof SET_ACTIVE_FIELD_VALUE;
  payload: {
    value: string;
  };
}

export interface SetActiveFieldAction {
  type: typeof SET_ACTIVE_FIELD;
  payload: {
    value: FieldName;
  };
}

export interface SetActiveFieldIserrorAction {
  type: typeof SET_ACTIVE_FIELD_ISERROR;
  payload: {
    value: boolean;
  };
}

export interface SetActiveFieldTransitionedAction {
  type: typeof SET_ACTIVE_FIELD_TRANSITIONED;
  payload: {
    value: boolean;
  };
}

export interface GoToNextAction {
  type: typeof GO_TO_NEXT;
  payload?: {};
}

export interface ChangeActiveFieldAction {
  type: typeof CHANGE_ACTIVE_FIELD;
  payload: {
    field: FieldName;
  };
}

export type ContactFormActions =
  | SetTextareaValueAction
  | SetFormFieldValueAction
  | SetActiveFieldAction
  | SetActiveFieldIserrorAction
  | SetActiveFieldTransitionedAction
  | GoToNextAction
  | ChangeActiveFieldAction;

// game
export const SET_CURSOR_POSITION = 'SET_CURSOR_POSITION';
export const SET_BARRIER_DIMENSIONS = 'SET_BARRIER_DIMENSIONS';
export const SET_GAME_CONTAINER_DIMENSIONS = 'SET_GAME_CONTAINER_DIMENSIONS';
export const SET_GAME_CONTAINER_SCROLL = 'SET_GAME_CONTAINER_SCROLL';

export interface SetCursorPositionAction {
  type: typeof SET_CURSOR_POSITION;
  payload: {
    x: number;
    y: number;
  };
}

export interface SetBarrierDimensionsAction {
  type: typeof SET_BARRIER_DIMENSIONS;
  payload: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SetGameContainerDimensionsAction {
  type: typeof SET_GAME_CONTAINER_DIMENSIONS;
  payload: {
    height: number;
    width: number;
  };
}

export interface SetGameContainerScroll {
  type: typeof SET_GAME_CONTAINER_SCROLL;
  payload: {
    scrollLeft: number;
    scrollTop: number;
  };
}

export type GameActions =
  | SetCursorPositionAction
  | SetBarrierDimensionsAction
  | SetGameContainerDimensionsAction
  | SetGameContainerScroll;

// ===========

// game
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: {
    value: Language;
  };
}

export type LanguageActions = ChangeLanguageAction;

// ===========
export type AppActions =
  | SectionSliderActions
  | ContactFormActions
  | GameActions
  | LanguageActions;
