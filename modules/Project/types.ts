import { Language } from 'store/reducers/language/languageInitState';

export type Project = {
  [key in Language]: {
    title: string;
    description: string;
    link: {
      href: string;
      content: string;
    };
    images: { path: string; alt: string }[];
    sections: {
      header: string;
      description?: string;
      paragraph?: string;
      list?: {
        type: 'text' | 'link';
        content: string;
        title?: string;
        href?: string;
      }[][];
    }[];
  };
};
