import { FilterItemListData, TagValueList } from '@components/Filter';
import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  title: string;
  description: string;
  filterItems: FilterItemListData;
  tagList: TagValueList;
}>;

const filterItems: FilterItemListData = {
  '1': {
    id: '1',
    name: 'flashcards',
    tags: [
      {
        id: 'back-end',
        content: {
          ENG: {
            label: 'back-end',
          },
          RU: {
            label: 'back-end',
          },
        },
      },
      {
        id: 'coffeescript',
        content: {
          ENG: {
            label: 'coffeescript',
          },
          RU: {
            label: 'coffeescript',
          },
        },
      },
    ],
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
    tags: [
      {
        id: 'backbonejs',
        content: {
          ENG: {
            label: 'backbonejs',
          },
          RU: {
            label: 'backbonejs',
          },
        },
      },
      {
        id: 'electron',
        content: {
          ENG: {
            label: 'electron',
          },
          RU: {
            label: 'electron',
          },
        },
      },
      {
        id: 'front-end',
        content: {
          ENG: {
            label: 'front-end',
          },
          RU: {
            label: 'front-end',
          },
        },
      },
    ],
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
    tags: [
      {
        id: 'game design',
        content: {
          ENG: {
            label: 'game design',
          },
          RU: {
            label: 'game design',
          },
        },
      },
      {
        id: 'electron',
        content: {
          ENG: {
            label: 'electron',
          },
          RU: {
            label: 'electron',
          },
        },
      },
      {
        id: 'front-end',
        content: {
          ENG: {
            label: 'front-end',
          },
          RU: {
            label: 'front-end',
          },
        },
      },
    ],
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
    tags: [
      {
        id: 'ui/ux design',
        content: {
          ENG: {
            label: 'ui/ux design',
          },
          RU: {
            label: 'ui/ux design',
          },
        },
      },
      {
        id: 'sass',
        content: {
          ENG: {
            label: 'sass',
          },
          RU: {
            label: 'sass',
          },
        },
      },
      {
        id: 'front-end',
        content: {
          ENG: {
            label: 'front-end',
          },
          RU: {
            label: 'front-end',
          },
        },
      },
      {
        id: 'back-end',
        content: {
          ENG: {
            label: 'back-end',
          },
          RU: {
            label: 'back-end',
          },
        },
      },
    ],
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
    tags: [
      {
        id: 'mongodb',
        content: {
          ENG: {
            label: 'mongodb',
          },
          RU: {
            label: 'mongodb',
          },
        },
      },
      {
        id: 'mongodb',
        content: {
          ENG: {
            label: 'mongodb',
          },
          RU: {
            label: 'mongodb',
          },
        },
      },
      {
        id: 'back-end',
        content: {
          ENG: {
            label: 'back-end',
          },
          RU: {
            label: 'back-end',
          },
        },
      },
    ],
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
    tags: [
      {
        id: 'backbonejs',
        content: {
          ENG: {
            label: 'backbonejs',
          },
          RU: {
            label: 'backbonejs',
          },
        },
      },
      {
        id: 'sass',
        content: {
          ENG: {
            label: 'sass',
          },
          RU: {
            label: 'sass',
          },
        },
      },
      {
        id: 'back-end',
        content: {
          ENG: {
            label: 'back-end',
          },
          RU: {
            label: 'back-end',
          },
        },
      },
    ],
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
    tags: [
      {
        id: 'back-end',
        content: {
          ENG: {
            label: 'back-end',
          },
          RU: {
            label: 'back-end',
          },
        },
      },
      {
        id: 'coffeescript',
        content: {
          ENG: {
            label: 'coffeescript',
          },
          RU: {
            label: 'coffeescript',
          },
        },
      },
    ],
    in: true,
    href: '/portfolio/glozzom',
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
};

const tagList: TagValueList = [
  {
    id: 'front-end',
    content: {
      ENG: {
        label: 'front-end',
      },
      RU: {
        label: 'front-end',
      },
    },
  },
  {
    id: 'back-end',
    content: {
      ENG: {
        label: 'back-end',
      },
      RU: {
        label: 'back-end',
      },
    },
  },
  {
    id: 'html5',
    content: {
      ENG: {
        label: 'html5',
      },
      RU: {
        label: 'html5',
      },
    },
  },
  {
    id: 'sass',
    content: {
      ENG: {
        label: 'sass',
      },
      RU: {
        label: 'sass',
      },
    },
  },
  {
    id: 'less',
    content: {
      ENG: {
        label: 'less',
      },
      RU: {
        label: 'less',
      },
    },
  },
  {
    id: 'javascript',
    content: {
      ENG: {
        label: 'javascript',
      },
      RU: {
        label: 'javascript',
      },
    },
  },
  {
    id: 'nodejs',
    content: {
      ENG: {
        label: 'nodejs',
      },
      RU: {
        label: 'nodejs',
      },
    },
  },
  {
    id: 'electron',
    content: {
      ENG: {
        label: 'electron',
      },
      RU: {
        label: 'electron',
      },
    },
  },
  {
    id: 'reactjs',
    content: {
      ENG: {
        label: 'reactjs',
      },
      RU: {
        label: 'reactjs',
      },
    },
  },
  {
    id: 'meteor',
    content: {
      ENG: {
        label: 'meteor',
      },
      RU: {
        label: 'meteor',
      },
    },
  },
  {
    id: 'coffeescript',
    content: {
      ENG: {
        label: 'coffeescript',
      },
      RU: {
        label: 'coffeescript',
      },
    },
  },
  {
    id: 'mongodb',
    content: {
      ENG: {
        label: 'mongodb',
      },
      RU: {
        label: 'mongodb',
      },
    },
  },
  {
    id: 'mysql',
    content: {
      ENG: {
        label: 'mysql',
      },
      RU: {
        label: 'mysql',
      },
    },
  },
  {
    id: 'backbonejs',
    content: {
      ENG: {
        label: 'backbonejs',
      },
      RU: {
        label: 'backbonejs',
      },
    },
  },
  {
    id: 'ui/ux design',
    content: {
      ENG: {
        label: 'ui/ux design',
      },
      RU: {
        label: 'ui/ux дизайн',
      },
    },
  },
  {
    id: 'animations',
    content: {
      ENG: {
        label: 'animations',
      },
      RU: {
        label: 'анимации',
      },
    },
  },
  {
    id: 'game design',
    content: {
      ENG: {
        label: 'game design',
      },
      RU: {
        label: 'game дизайн',
      },
    },
  },
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
