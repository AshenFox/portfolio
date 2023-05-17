export type Language = 'RU' | 'ENG';

export interface LanguageState {
  language: Language;
}

// =========================

const languageInitState: LanguageState = {
  language: 'ENG',
};

export default languageInitState;
