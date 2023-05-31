import { Language } from '@store/reducers/language/languageInitState';

export type CreateContent<T> = {
  [key in Language]: T;
};
