import { LanguageActions } from './../../types/types';
import { CHANGE_LANGUAGE } from '../../types/types';
import initialState, { LanguageState } from './languageInitState';

const languageReducer = (
  state = initialState,
  action: LanguageActions
): LanguageState => {
  const { payload, type } = action;

  switch (type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload.value,
      };

    default:
      return state;
  }
};

export default languageReducer;
