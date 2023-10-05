import { Content } from '../types';

const tuner: Content = {
  ENG: {
    title: 'natours',
    description: `Interactive landing page of a travel agency.`,
    link: {
      href: 'https://ashenfox.github.io/natours/',
      content: 'landing page',
      title: 'natours',
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
            '\u2002Modern landing page with a diverse range of animated elements, a menu, video elements, modal windows and a contact form.',
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
                content: 'https://ashenfox.github.io/natours/',
                href: 'https://ashenfox.github.io/natours/',
                title: 'natours',
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
                href: 'https://github.com/AshenFox/natours',
                title: 'github natours',
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
    title: 'natours',
    description: `Интерактивная лендинг страница турагенства.`,
    link: {
      href: 'https://ashenfox.github.io/natours/',
      content: 'лендинг страница',
      title: 'natours',
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
            '\u2002Современная лендинг страница с множеством анимированных элементов, меню, видео элементами, модальными окнами, формой заказа.',
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
                content: 'https://ashenfox.github.io/natours/',
                href: 'https://ashenfox.github.io/natours/',
                title: 'natours',
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
                href: 'https://github.com/AshenFox/natours',
                title: 'github natours',
              },
            ],
          ],
        },
      ],
    ],
  },
};

export default tuner;
