import { CreateContent } from './../../helpers/types';

export type Project = {
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

export type Content = CreateContent<Project>;
