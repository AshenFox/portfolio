import { Content } from '../types';

const tuner: Content = {
  ENG: {
    title: 'glozzom',
    description: `Interactive landing page of an online retail.`,
    link: {
      href: 'https://ashenfox.github.io/glozzom/',
      content: 'landing page',
      title: 'glozzom',
    },
    images: [
      {
        path: '/projects/glozzom/screenshots/1.jpg',
        alt: 'image',
      },
      {
        path: '/projects/glozzom/screenshots/2.jpg',
        alt: 'image',
      },
      {
        path: '/projects/glozzom/screenshots/3.jpg',
        alt: 'image',
      },
    ],
    sections: [
      [
        {
          type: 'header',
          content: 'About this project',
        },
        {
          type: 'devider',
        },
        {
          type: 'paragraph',
          content:
            '\u2002Modern landing page with a diverse range of interactive elements, built using UI framework Bootstrap. The project is bundled with the help of Webpack.',
        },
      ],
      [
        {
          type: 'header',
          content: 'Technical sheet',
        },
        {
          type: 'description',
          content:
            '\u2002Code technologies I got involved with while working on this project.',
        },
        {
          type: 'devider',
        },
        {
          type: 'list',
          content: [
            [
              {
                type: 'text',
                content: 'HTML',
              },
            ],
            [
              {
                type: 'text',
                content: 'SCSS',
              },
            ],
            [
              {
                type: 'text',
                content: 'JavaScript',
              },
            ],
            [
              {
                type: 'text',
                content: 'Bootstrap',
              },
            ],
            [
              {
                type: 'text',
                content: 'Webpack',
              },
            ],
          ],
        },
      ],
      [
        {
          type: 'header',
          content: 'Resources',
        },
        {
          type: 'devider',
        },
        {
          type: 'list',
          content: [
            [
              {
                type: 'text',
                content: 'The project is online at ',
              },
              {
                type: 'link',
                content: 'https://ashenfox.github.io/glozzom/',
                href: 'https://ashenfox.github.io/glozzom/',
                title: 'glozzom',
              },
            ],
            [
              {
                type: 'text',
                content: 'Access the source code at my ',
              },
              {
                type: 'link',
                content: 'github',
                href: 'https://github.com/AshenFox/glozzom',
                title: 'github glozzom',
              },
              {
                type: 'text',
                content: ' page',
              },
            ],
          ],
        },
      ],
    ],
  },
  RU: {
    title: 'glozzom',
    description: `Многостраничный сайт интернет магазина.`,
    link: {
      href: 'https://ashenfox.github.io/glozzom/',
      content: 'лендинг страница',
      title: 'glozzom',
    },
    images: [
      {
        path: '/6.jpg',
        alt: 'image',
      },
      {
        path: '/5.jpg',
        alt: 'image',
      },
      {
        path: '/4.jpg',
        alt: 'image',
      },
    ],
    sections: [
      [
        {
          type: 'header',
          content: 'О проекте',
        },
        {
          type: 'devider',
        },
        {
          type: 'paragraph',
          content:
            '\u2002Многостраничный сайт с множеством интерактивных элементов основанный на UI framework Bootstrap. Собран с помощью Webpack.',
        },
      ],
      [
        {
          type: 'header',
          content: 'Список технологий',
        },
        {
          type: 'description',
          content: '\u2002Технологии которые я использовал работая над этим проектом.',
        },
        {
          type: 'devider',
        },
        {
          type: 'list',
          content: [
            [
              {
                type: 'text',
                content: 'HTML',
              },
            ],
            [
              {
                type: 'text',
                content: 'SCSS',
              },
            ],
            [
              {
                type: 'text',
                content: 'JavaScript',
              },
            ],
            [
              {
                type: 'text',
                content: 'Bootstrap',
              },
            ],
            [
              {
                type: 'text',
                content: 'Webpack',
              },
            ],
          ],
        },
      ],
      [
        {
          type: 'header',
          content: 'Ресурсы',
        },
        {
          type: 'devider',
        },
        {
          type: 'list',
          content: [
            [
              {
                type: 'text',
                content: 'Проект размещен на ',
              },
              {
                type: 'link',
                content: 'https://ashenfox.github.io/glozzom/',
                href: 'https://ashenfox.github.io/glozzom/',
                title: 'glozzom',
              },
            ],
            [
              {
                type: 'text',
                content: 'Исходный код можно посмотреть на ',
              },
              {
                type: 'link',
                content: 'github',
                href: 'https://github.com/AshenFox/glozzom',
                title: 'github glozzom',
              },
            ],
          ],
        },
      ],
    ],
  },
};

export default tuner;
