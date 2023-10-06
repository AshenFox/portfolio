import { CreateContent } from '@helpers/types';

export type TagID =
  | 'show all'
  | 'front-end'
  | 'back-end'
  | 'html5'
  | 'sass'
  | 'less'
  | 'javascript'
  | 'nodejs'
  | 'electron'
  | 'reactjs'
  | 'meteor'
  | 'coffeescript'
  | 'mongodb'
  | 'mysql'
  | 'backbonejs'
  | 'ui/ux design'
  | 'animations'
  | 'game design';

export type TagValue = {
  id: TagID;
  content: CreateContent<{
    label: string;
  }>;
};

export type TagValueList = TagValue[];

export type FilterItemData = {
  id: string;
  name: string;
  tags: TagValueList;
  in: boolean;
  href: string;
  thumbnails: {
    main: string;
    hover: string;
  };
};

export type FilterItemListData = {
  [key: string]: FilterItemData;
};

type Content = CreateContent<{
  info: (all: string) => string;
  all: string;
}>;

export const allTag: TagValue = {
  id: 'show all',
  content: {
    ENG: {
      label: 'show all',
    },
    RU: {
      label: 'все',
    },
  },
};

const content: Content = {
  ENG: {
    info: all =>
      `Showing ${all} projects. Use the filter to list them by skill or technology.`,
    all: 'all',
  },
  RU: {
    info: all => `${all} проекты. Список можно отфильтровать по технологии или навыку.`,
    all: 'Все',
  },
};

export default content;
