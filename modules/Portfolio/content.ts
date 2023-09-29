//workinprogress
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
    name: 'test1',
    tags: ['back-end', 'coffeescript'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '2': {
    id: '2',
    name: 'test2',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '3': {
    id: '3',
    name: 'test3',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '4': {
    id: '4',
    name: 'test4',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '5': {
    id: '5',
    name: 'test5',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '6': {
    id: '6',
    name: 'test6',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '7': {
    id: '7',
    name: 'test7',
    tags: ['back-end', 'coffeescript'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '8': {
    id: '8',
    name: 'test8',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '9': {
    id: '9',
    name: 'test9',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '10': {
    id: '10',
    name: 'test10',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '11': {
    id: '11',
    name: 'test11',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '12': {
    id: '12',
    name: 'test12',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '13': {
    id: '13',
    name: 'test13',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '14': {
    id: '14',
    name: 'test14',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '15': {
    id: '15',
    name: 'test15',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '16': {
    id: '16',
    name: 'test16',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '17': {
    id: '17',
    name: 'test17',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
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
    title: 'web developer portfolio',
    description:
      'From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects.',
    filterItems,
    tagList,
  },
  RU: {
    title: 'портфолио',
    description:
      'Начиная от Web Components и UI/UX анимаций, заканчивая React.JS, Redux, Vue.JS, и Node.JS. Посмотрите на мои последние проекты лендинг страниц, SPA и SSR приложений.',
    filterItems,
    tagList,
  },
};

export default content;
