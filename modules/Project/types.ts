import { CreateContent } from '@helpers/types';

type Header = {
  type: 'header';
  content: string;
};

type Description = {
  type: 'description';
  content: string;
};

type Devider = {
  type: 'devider';
};

type Paragraph = {
  type: 'paragraph';
  content: string;
};

type List = {
  type: 'list';
  content: {
    type: 'text' | 'link';
    content: string;
    title?: string;
    href?: string;
  }[][];
};

type Section = (Header | Description | Devider | Paragraph | List)[];

type Sections = Section[];

export type Project = {
  title: string;
  description: string;
  link: {
    href: string;
    content: string;
    title: string;
  };
  images: { path: string; alt: string }[];
  sections: Sections;
};

export type Content = CreateContent<Project>;
