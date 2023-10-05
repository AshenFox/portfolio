import { Content } from '../types';

const tuner: Content = {
  ENG: {
    title: 'nexter',
    description: `Interactive landing page of an online real estate retail.`,
    link: {
      href: 'https://ashenfox.github.io/nexter/',
      content: 'landing page',
      title: 'nexter',
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
          content: 'About this project',
        },
        {
          type: 'devider',
        },
        {
          type: 'paragraph',
          content:
            '\u2002Modern landing page with the layout based on CSS Grid technology.',
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
                content: 'CSS Grid',
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
                content: 'https://ashenfox.github.io/nexter/',
                href: 'https://ashenfox.github.io/nexter/',
                title: 'nexter',
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
                href: 'https://github.com/AshenFox/nexter',
                title: 'github nexter',
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
    title: 'nexter',
    description: `Лендинг страница интернет магазина по продаже недвижимости.`,
    link: {
      href: 'https://ashenfox.github.io/nexter/',
      content: 'лендинг страница',
      title: 'nexter',
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
            '\u2002Современная лендинг страница с разметкой основанной на технологии CSS Grid.',
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
                content: 'CSS Grid',
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
                content: 'https://ashenfox.github.io/nexter/',
                href: 'https://ashenfox.github.io/nexter/',
                title: 'nexter',
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
                href: 'https://github.com/AshenFox/nexter',
                title: 'github nexter',
              },
            ],
          ],
        },
      ],
    ],
  },
};

export default tuner;
