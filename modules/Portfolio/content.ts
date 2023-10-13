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
        id: 'TypeScript',
        content: {
          ENG: {
            label: 'TypeScript',
          },
          RU: {
            label: 'TypeScript',
          },
        },
      },
      {
        id: 'Next.js',
        content: {
          ENG: {
            label: 'Next.js',
          },
          RU: {
            label: 'Next.js',
          },
        },
      },
      {
        id: 'Express',
        content: {
          ENG: {
            label: 'Express',
          },
          RU: {
            label: 'Express',
          },
        },
      },
      {
        id: 'Docker',
        content: {
          ENG: {
            label: 'Docker',
          },
          RU: {
            label: 'Docker',
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
      {
        id: 'HTML',
        content: {
          ENG: {
            label: 'HTML',
          },
          RU: {
            label: 'HTML',
          },
        },
      },
      {
        id: 'SASS',
        content: {
          ENG: {
            label: 'SASS',
          },
          RU: {
            label: 'SASS',
          },
        },
      },

      {
        id: 'Mongo DB',
        content: {
          ENG: {
            label: 'Mongo DB',
          },
          RU: {
            label: 'Mongo DB',
          },
        },
      },
      {
        id: 'Mongoose',
        content: {
          ENG: {
            label: 'Mongoose',
          },
          RU: {
            label: 'Mongoose',
          },
        },
      },
      {
        id: 'Service Workers',
        content: {
          ENG: {
            label: 'Service Workers',
          },
          RU: {
            label: 'Service Workers',
          },
        },
      },
      {
        id: 'LocalStorage',
        content: {
          ENG: {
            label: 'LocalStorage',
          },
          RU: {
            label: 'LocalStorage',
          },
        },
      },
      {
        id: 'JSON Web Tokens',
        content: {
          ENG: {
            label: 'JSON Web Tokens',
          },
          RU: {
            label: 'JSON Web Tokens',
          },
        },
      },
      {
        id: 'Google Custom Search API',
        content: {
          ENG: {
            label: 'Google Custom Search API',
          },
          RU: {
            label: 'Google Custom Search API',
          },
        },
      },
      {
        id: 'React',
        content: {
          ENG: {
            label: 'React',
          },
          RU: {
            label: 'React',
          },
        },
      },
      {
        id: 'Redux',
        content: {
          ENG: {
            label: 'Redux',
          },
          RU: {
            label: 'Redux',
          },
        },
      },
      {
        id: 'Node.js',
        content: {
          ENG: {
            label: 'Node.js',
          },
          RU: {
            label: 'Node.js',
          },
        },
      },
    ],
    in: true,
    href: '/portfolio/flashcards',
    thumbnails: {
      main: '/projects/flashcards/thumbnails/1.jpg',
      hover: '/projects/flashcards/thumbnails/2.jpg',
    },
  },
  '2': {
    id: '2',
    name: 'gosurf',
    tags: [
      {
        id: 'SASS',
        content: {
          ENG: {
            label: 'SASS',
          },
          RU: {
            label: 'SASS',
          },
        },
      },
      {
        id: 'Animations',
        content: {
          ENG: {
            label: 'Animations',
          },
          RU: {
            label: 'Анимации',
          },
        },
      },
      {
        id: 'Jquery',
        content: {
          ENG: {
            label: 'Jquery',
          },
          RU: {
            label: 'Jquery',
          },
        },
      },
      {
        id: 'Webpack',
        content: {
          ENG: {
            label: 'Webpack',
          },
          RU: {
            label: 'Webpack',
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
        id: 'HTML',
        content: {
          ENG: {
            label: 'HTML',
          },
          RU: {
            label: 'HTML',
          },
        },
      },
      {
        id: 'JavaScript',
        content: {
          ENG: {
            label: 'JavaScript',
          },
          RU: {
            label: 'JavaScript',
          },
        },
      },
    ],
    in: true,
    href: '/portfolio/gosurf',
    thumbnails: {
      main: '/projects/gosurf/thumbnails/1.jpg',
      hover: '/projects/gosurf/thumbnails/2.jpg',
    },
  },
  '3': {
    id: '3',
    name: 'tuner',
    tags: [
      {
        id: 'React',
        content: {
          ENG: {
            label: 'React',
          },
          RU: {
            label: 'React',
          },
        },
      },
      {
        id: 'Redux',
        content: {
          ENG: {
            label: 'Redux',
          },
          RU: {
            label: 'Redux',
          },
        },
      },
      {
        id: 'TypeScript',
        content: {
          ENG: {
            label: 'TypeScript',
          },
          RU: {
            label: 'TypeScript',
          },
        },
      },
      {
        id: 'Docker',
        content: {
          ENG: {
            label: 'Docker',
          },
          RU: {
            label: 'Docker',
          },
        },
      },
      {
        id: 'HTML',
        content: {
          ENG: {
            label: 'HTML',
          },
          RU: {
            label: 'HTML',
          },
        },
      },
      {
        id: 'SASS',
        content: {
          ENG: {
            label: 'SASS',
          },
          RU: {
            label: 'SASS',
          },
        },
      },

      {
        id: 'Service Workers',
        content: {
          ENG: {
            label: 'Service Workers',
          },
          RU: {
            label: 'Service Workers',
          },
        },
      },
      {
        id: 'IndexedDB',
        content: {
          ENG: {
            label: 'IndexedDB',
          },
          RU: {
            label: 'IndexedDB',
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
      main: '/projects/tuner/thumbnails/1.jpg',
      hover: '/projects/tuner/thumbnails/2.jpg',
    },
  },
  '4': {
    id: '4',
    name: 'natours',
    tags: [
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
        id: 'HTML',
        content: {
          ENG: {
            label: 'HTML',
          },
          RU: {
            label: 'HTML',
          },
        },
      },
      {
        id: 'SASS',
        content: {
          ENG: {
            label: 'SASS',
          },
          RU: {
            label: 'SASS',
          },
        },
      },
      {
        id: 'JavaScript',
        content: {
          ENG: {
            label: 'JavaScript',
          },
          RU: {
            label: 'JavaScript',
          },
        },
      },
    ],
    in: true,
    href: '/portfolio/natours',
    thumbnails: {
      main: '/projects/natours/thumbnails/1.jpg',
      hover: '/projects/natours/thumbnails/2.jpg',
    },
  },
  '5': {
    id: '5',
    name: 'portfolio',
    tags: [
      {
        id: 'HTML',
        content: {
          ENG: {
            label: 'HTML',
          },
          RU: {
            label: 'HTML',
          },
        },
      },
      {
        id: 'SASS',
        content: {
          ENG: {
            label: 'SASS',
          },
          RU: {
            label: 'SASS',
          },
        },
      },
      {
        id: 'React',
        content: {
          ENG: {
            label: 'React',
          },
          RU: {
            label: 'React',
          },
        },
      },
      {
        id: 'Redux',
        content: {
          ENG: {
            label: 'Redux',
          },
          RU: {
            label: 'Redux',
          },
        },
      },
      {
        id: 'TypeScript',
        content: {
          ENG: {
            label: 'TypeScript',
          },
          RU: {
            label: 'TypeScript',
          },
        },
      },
      {
        id: 'Next.js',
        content: {
          ENG: {
            label: 'Next.js',
          },
          RU: {
            label: 'Next.js',
          },
        },
      },
      {
        id: 'LocalStorage',
        content: {
          ENG: {
            label: 'LocalStorage',
          },
          RU: {
            label: 'LocalStorage',
          },
        },
      },
      {
        id: 'Docker',
        content: {
          ENG: {
            label: 'Docker',
          },
          RU: {
            label: 'Docker',
          },
        },
      },
      {
        id: 'Animations',
        content: {
          ENG: {
            label: 'Animations',
          },
          RU: {
            label: 'Анимации',
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
    href: '/portfolio/portfolio',
    thumbnails: {
      main: '/projects/portfolio/thumbnails/1.jpg',
      hover: '/projects/portfolio/thumbnails/2.jpg',
    },
  },
  '6': {
    id: '6',
    name: 'nexter',
    tags: [
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
        id: 'HTML',
        content: {
          ENG: {
            label: 'HTML',
          },
          RU: {
            label: 'HTML',
          },
        },
      },
      {
        id: 'SASS',
        content: {
          ENG: {
            label: 'SASS',
          },
          RU: {
            label: 'SASS',
          },
        },
      },
      {
        id: 'CSS Grid',
        content: {
          ENG: {
            label: 'CSS Grid',
          },
          RU: {
            label: 'CSS Grid',
          },
        },
      },
    ],
    in: true,
    href: '/portfolio/nexter',
    thumbnails: {
      main: '/projects/nexter/thumbnails/1.jpg',
      hover: '/projects/nexter/thumbnails/2.jpg',
    },
  },
  '7': {
    id: '7',
    name: 'glozzom',
    tags: [
      {
        id: 'SASS',
        content: {
          ENG: {
            label: 'SASS',
          },
          RU: {
            label: 'SASS',
          },
        },
      },
      {
        id: 'JavaScript',
        content: {
          ENG: {
            label: 'JavaScript',
          },
          RU: {
            label: 'JavaScript',
          },
        },
      },
      {
        id: 'Bootstrap',
        content: {
          ENG: {
            label: 'Bootstrap',
          },
          RU: {
            label: 'Bootstrap',
          },
        },
      },
      {
        id: 'Webpack',
        content: {
          ENG: {
            label: 'Webpack',
          },
          RU: {
            label: 'Webpack',
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
        id: 'HTML',
        content: {
          ENG: {
            label: 'HTML',
          },
          RU: {
            label: 'HTML',
          },
        },
      },
    ],
    in: true,
    href: '/portfolio/glozzom',
    thumbnails: {
      main: '/projects/glozzom/thumbnails/1.jpg',
      hover: '/projects/glozzom/thumbnails/2.jpg',
    },
  },
};

const tagList: TagValueList = [
  {
    id: 'JavaScript',
    content: {
      ENG: {
        label: 'JavaScript',
      },
      RU: {
        label: 'JavaScript',
      },
    },
  },
  {
    id: 'TypeScript',
    content: {
      ENG: {
        label: 'TypeScript',
      },
      RU: {
        label: 'TypeScript',
      },
    },
  },
  {
    id: 'React',
    content: {
      ENG: {
        label: 'React',
      },
      RU: {
        label: 'React',
      },
    },
  },
  {
    id: 'Redux',
    content: {
      ENG: {
        label: 'Redux',
      },
      RU: {
        label: 'Redux',
      },
    },
  },
  {
    id: 'Next.js',
    content: {
      ENG: {
        label: 'Next.js',
      },
      RU: {
        label: 'Next.js',
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
    id: 'Node.js',
    content: {
      ENG: {
        label: 'Node.js',
      },
      RU: {
        label: 'Node.js',
      },
    },
  },
  {
    id: 'Express',
    content: {
      ENG: {
        label: 'Express',
      },
      RU: {
        label: 'Express',
      },
    },
  },
  {
    id: 'Mongo DB',
    content: {
      ENG: {
        label: 'Mongo DB',
      },
      RU: {
        label: 'Mongo DB',
      },
    },
  },
  {
    id: 'CSS Grid',
    content: {
      ENG: {
        label: 'CSS Grid',
      },
      RU: {
        label: 'CSS Grid',
      },
    },
  },
  {
    id: 'SASS',
    content: {
      ENG: {
        label: 'SASS',
      },
      RU: {
        label: 'SASS',
      },
    },
  },
  {
    id: 'Animations',
    content: {
      ENG: {
        label: 'Animations',
      },
      RU: {
        label: 'Анимации',
      },
    },
  },
  {
    id: 'Bootstrap',
    content: {
      ENG: {
        label: 'Bootstrap',
      },
      RU: {
        label: 'Bootstrap',
      },
    },
  },

  {
    id: 'Jquery',
    content: {
      ENG: {
        label: 'Jquery',
      },
      RU: {
        label: 'Jquery',
      },
    },
  },
  {
    id: 'Service Workers',
    content: {
      ENG: {
        label: 'Service Workers',
      },
      RU: {
        label: 'Service Workers',
      },
    },
  },
  {
    id: 'LocalStorage',
    content: {
      ENG: {
        label: 'LocalStorage',
      },
      RU: {
        label: 'LocalStorage',
      },
    },
  },
  {
    id: 'IndexedDB',
    content: {
      ENG: {
        label: 'IndexedDB',
      },
      RU: {
        label: 'IndexedDB',
      },
    },
  },
  {
    id: 'JSON Web Tokens',
    content: {
      ENG: {
        label: 'JSON Web Tokens',
      },
      RU: {
        label: 'JSON Web Tokens',
      },
    },
  },
  {
    id: 'Google Custom Search API',
    content: {
      ENG: {
        label: 'Google Custom Search API',
      },
      RU: {
        label: 'Google Custom Search API',
      },
    },
  },
  {
    id: 'Docker',
    content: {
      ENG: {
        label: 'Docker',
      },
      RU: {
        label: 'Docker',
      },
    },
  },

  {
    id: 'Webpack',
    content: {
      ENG: {
        label: 'Webpack',
      },
      RU: {
        label: 'Webpack',
      },
    },
  },
];

const content: Content = {
  ENG: {
    title: 'portfolio',
    description:
      'From UI animations to React.JS, Redux, and Node.JS. Check out my latest projects of landing pages and SPA and SSR applications.',
    filterItems,
    tagList,
  },
  RU: {
    title: 'портфолио',
    description:
      'Начиная от UI анимаций, заканчивая React.JS, Redux, и Node.JS. Посмотрите на мои последние проекты лендинг страниц, SPA и SSR приложений.',
    filterItems,
    tagList,
  },
};

export default content;
