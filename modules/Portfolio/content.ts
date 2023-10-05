import { FilterItemListData, TagNameList } from '@components/Filter';
import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  title: string;
  description: string;
  filterItems: FilterItemListData;
  tagList: TagNameList;
}>;

const filterItems: FilterItemListData = {
  '1': {
    id: '1',
    name: 'flashcards',
    tags: ['back-end', 'coffeescript'],
    in: true,
    href: '/portfolio/flashcards',
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '2': {
    id: '2',
    name: 'gosurf',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    href: '/portfolio/gosurf',
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '3': {
    id: '3',
    name: 'tuner',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    href: '/portfolio/tuner',
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '4': {
    id: '4',
    name: 'natours',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    href: '/portfolio/natours',
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '5': {
    id: '5',
    name: 'portfolio',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
    href: '/portfolio/portfolio',
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '6': {
    id: '6',
    name: 'nexter',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    href: '/portfolio/nexter',
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '7': {
    id: '7',
    name: 'glozzom',
    tags: ['back-end', 'coffeescript'],
    in: true,
    href: '/portfolio/glozzom',
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
};

const tagList: TagNameList = [
  'front-end',
  'back-end',
  'html5',
  'sass',
  'less',
  'javascript',
  'nodejs',
  'electron',
  'reactjs',
  'meteor',
  'coffeescript',
  'mongodb',
  'mysql',
  'backbonejs',
  'ui/ux design',
  'animations',
  'game design',
];

const content: Content = {
  ENG: {
    title: 'portfolio',
    description:
      'From UI/UX animations to React.JS, Redux, and Node.JS. Check out my latest projects of landing pages and SPA and SSR applications.',
    filterItems,
    tagList,
  },
  RU: {
    title: 'портфолио',
    description:
      'Начиная UI/UX анимациями, заканчивая React.JS, Redux, и Node.JS. Посмотрите на мои последние проекты лендинг страниц, SPA и SSR приложений.',
    filterItems,
    tagList,
  },
};

export default content;
