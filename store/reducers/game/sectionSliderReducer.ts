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
      };

    default:
      return state;
  }
};

export default sectionSliderReducer;
