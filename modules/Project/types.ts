//workinprogress
import { CreateContent } from '@helpers/types';

/* export type Project = {
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
}; */

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
  };
  images: { path: string; alt: string }[];
  sections: Sections;
};

export type Content = CreateContent<Project>;
