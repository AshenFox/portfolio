import { Content } from '../types';

const tuner: Content = {
  ENG: {
    title: 'gosurf',
    description: `Interactive landing page of an online surfing retail.`,
    link: {
      href: 'https://ashenfox.github.io/gosurf/',
      content: 'landing page',
      title: 'gosurf',
    },
    images: [
      {
        path: '/projects/gosurf/screenshots/1.jpg',
        alt: 'image',
      },
      {
        path: '/projects/gosurf/screenshots/2.jpg',
        alt: 'image',
      },
      {
        path: '/projects/gosurf/screenshots/3.jpg',
        alt: 'image',
      },
      {
        path: '/projects/gosurf/screenshots/4.jpg',
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
            '\u2002Modern landing page with a diverse range of animated elements, a menu and sliders. The project is bundled with the help of webpack.',
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
                content: 'SASS',
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
                content: 'Webpack',
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
                content: 'Animate.css',
              },
            ],
            [
              {
                type: 'text',
                content: 'Jquery',
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
                content: 'https://ashenfox.github.io/gosurf/',
                href: 'https://ashenfox.github.io/gosurf/',
                title: 'gosurf',
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
                href: 'https://github.com/AshenFox/gosurf',
                title: 'github gosurf',
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
    title: 'gosurf',
    description: `Интерактивная лендинг страница интернет магазина для серфинга.`,
    link: {
      href: 'https://ashenfox.github.io/gosurf/',
      content: 'лендинг страница',
      title: 'gosurf',
    },
    images: [
      {
        path: '/projects/gosurf/screenshots/1.jpg',
        alt: 'image',
      },
      {
        path: '/projects/gosurf/screenshots/2.jpg',
        alt: 'image',
      },
      {
        path: '/projects/gosurf/screenshots/3.jpg',
        alt: 'image',
      },
      {
        path: '/projects/gosurf/screenshots/4.jpg',
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
            '\u2002Современная лендинг страница с множеством анимированных элементов, слайдерами, меню. Собрана с помощью Webpack.',
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
                content: 'SASS',
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
                content: 'Webpack',
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
                content: 'Animate.css',
              },
            ],
            [
              {
                type: 'text',
                content: 'Jquery',
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
                content: 'https://ashenfox.github.io/gosurf/',
                href: 'https://ashenfox.github.io/gosurf/',
                title: 'gosurf',
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
                href: 'https://github.com/AshenFox/gosurf',
                title: 'github gosurf',
              },
            ],
          ],
        },
      ],
    ],
  },
};

export default tuner;
