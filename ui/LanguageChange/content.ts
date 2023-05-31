import { CreateContent } from '@helpers/types';

export type LangaugeValues = {
  RU: string;
  ENG: string;
};

export type Content = CreateContent<LangaugeValues>;

const content: Content = {
  RU: {
    RU: 'РУС',
    ENG: 'АНГ',
  },
  ENG: {
    RU: 'RU',
    ENG: 'ENG',
  },
};

export default content;
