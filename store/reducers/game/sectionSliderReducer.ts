import {
  SectionSliderActions,
  SET_CONTENT_LOADED,
  SET_CONTENT_LOADER_ISAPPEARING,
  SET_CONTENT_LOADER_ISEXITED,
  SET_SHOW_SECTION_LOADER,
  SET_SHOW_NAVIGATION,
  SET_SHOW_MENU,
  SET_DIRECTION,
} from '../../types/types';
import initialState, { SectionSliderState } from './sectionSliderInitState';

const sectionSliderReducer = (
  state = initialState,
  action: SectionSliderActions
): SectionSliderState => {
  const { payload, type } = action;

  switch (type) {
    case SET_CONTENT_LOADED:
      return {
        ...state,
        content_loaded: payload.value,
      };

    case SET_CONTENT_LOADER_ISAPPEARING:
      return {
        ...state,
        content_loader: {
          ...state.content_loader,
          is_appearing: payload.value,
        },
      };

    case SET_CONTENT_LOADER_ISEXITED:
      return {
        ...state,
        content_loader: {
          ...state.content_loader,
          is_exited: payload.value,
        },
      };

    case SET_SHOW_SECTION_LOADER:
      return {
        ...state,
        show_section_loader: payload.value,
      };

    case SET_SHOW_NAVIGATION:
      return {
        ...state,
        show_navigation: payload.value,
      };

    case SET_SHOW_MENU:
      return {
        ...state,
        show_menu: payload.value,
      };

    case SET_DIRECTION:
      return {
        ...state,
        dir: payload.value,
      };

    default:
      return state;
  }
};

export default sectionSliderReducer;
