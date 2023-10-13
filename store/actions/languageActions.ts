import { Language } from '@store/reducers/language/languageInitState';
import { AppActions } from '../types/types';

import { CHANGE_LANGUAGE } from '../types/types';

// CHANGE_LANGUAGE
export const change_language = (value: Language): AppActions => {
  localStorage.setItem('language', value);

  return {
    type: CHANGE_LANGUAGE,
    payload: {
      value,
    },
  };
};

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
