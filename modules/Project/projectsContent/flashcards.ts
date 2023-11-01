import { Content } from '../types';

const flashcards: Content = {
  ENG: {
    title: 'flashcards',
    description: `SSR application application for memorizing information via spaced repetition and interactive and engaging games.`,
    link: {
      href: 'https://flashcards-ashenfox.duckdns.org',
      content: 'application',
      title: 'flashcards',
    },
    images: [
      {
        path: '/projects/flashcards/screenshots/1.jpg',
        alt: 'image',
      },
      {
        path: '/projects/flashcards/screenshots/2.jpg',
        alt: 'image',
      },
      {
        path: '/projects/flashcards/screenshots/3.jpg',
        alt: 'image',
      },
      {
        path: '/projects/flashcards/screenshots/4.jpg',
        alt: 'image',
      },
      {
        path: '/projects/flashcards/screenshots/5.jpg',
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
          content: '\u2002The app allows you to:',
        },
        {
          type: 'list',
          content: [
            [
              {
                type: 'text',
                content: 'save your own flash-cards sets',
              },
            ],
            [
              {
                type: 'text',
                content: `add to english words definitions from the most popular dictionaries on the internet`,
              },
            ],
            [
              {
                type: 'text',
                content:
                  'attach images to flash-cards allowing you to engage your visual memory in the process of learning',
              },
            ],
            [
              {
                type: 'text',
                content:
                  'listen what words and sentences sound like in english and russian languages',
              },
            ],
            [
              {
                type: 'text',
                content: 'search through the created flash-cards and sets',
              },
            ],
            [
              {
                type: 'text',
                content: `use the application as a notebook that you can use to write down and save new words and sentences`,
              },
            ],
          ],
        },
        {
          type: 'paragraph',
          content: `\u2002Created flash-cards can be added to a special "study regime", that enables the app to send notifications in increasing time intervals to remind that it's time to study the flash-cards. That makes commiting information to memory highly effective.`,
        },
        {
          type: 'paragraph',
          content:
            'Learning process is conducted in an interactive format via one of the two available game regimes.',
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
                content: 'TypeScript',
              },
            ],
            [
              {
                type: 'text',
                content: 'React',
              },
            ],
            [
              {
                type: 'text',
                content: 'Next.js',
              },
            ],
            [
              {
                type: 'text',
                content: 'Express',
              },
            ],
            [
              {
                type: 'text',
                content: 'Mongo DB',
              },
            ],
            [
              {
                type: 'text',
                content: 'Mongoose',
              },
            ],
            [
              {
                type: 'text',
                content: 'Service Workers',
              },
            ],
            [
              {
                type: 'text',
                content: 'LocalStorage',
              },
            ],
            [
              {
                type: 'text',
                content: 'JSON Web Tokens',
              },
            ],
            [
              {
                type: 'text',
                content: 'Google Custom Search API',
              },
            ],
            [
              {
                type: 'text',
                content: 'Docker',
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
                content: 'https://flashcards-ashenfox.duckdns.org',
                href: 'https://flashcards-ashenfox.duckdns.org',
                title: 'flashcards',
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
                href: 'https://flashcards-ashenfox.duckdns.org',
                title: 'github flashcards',
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
    title: 'flashcards',
    description: `SSR приложение для эффективного запоминания информации 
    через интервальное повторение и интерактивные и увлекательные игры.`,
    link: {
      href: 'https://flashcards-ashenfox.duckdns.org',
      content: 'приложение',
      title: 'flashcards',
    },
    images: [
      {
        path: '/projects/flashcards/screenshots/1.jpg',
        alt: 'image',
      },
      {
        path: '/projects/flashcards/screenshots/2.jpg',
        alt: 'image',
      },
      {
        path: '/projects/flashcards/screenshots/3.jpg',
        alt: 'image',
      },
      {
        path: '/projects/flashcards/screenshots/4.jpg',
        alt: 'image',
      },
      {
        path: '/projects/flashcards/screenshots/5.jpg',
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
          content: '\u2002Данное приложение дает возможность:',
        },
        {
          type: 'list',
          content: [
            [
              {
                type: 'text',
                content: 'сохранять свои наборы flash карточек',
              },
            ],
            [
              {
                type: 'text',
                content: `добавлять к английским словам определения и примеры использования 
                  из самых известных английских словарей в интернете`,
              },
            ],
            [
              {
                type: 'text',
                content:
                  'прикреплять к карточкам картинки для задействования зрительной памяти',
              },
            ],
            [
              {
                type: 'text',
                content:
                  'прослушать как звучат слова и предложения на русском и английском языках',
              },
            ],
            [
              {
                type: 'text',
                content: 'осуществлять поиск по сохранённым наборам и карточкам',
              },
            ],
            [
              {
                type: 'text',
                content: `использовать приложение как блокнот в который можно оперативно записать 
                  и сохранить заинтересовавшие слова и предложения`,
              },
            ],
          ],
        },
        {
          type: 'paragraph',
          content:
            '\u0009Созданные карточки можно добавлять в специальный “режим изучения”, после чего приложение будет присылать уведомления через увеличивающиеся временные интервалы, напоминая, что нужно повторить добавленные карточки, для максимально эффективного запоминания информации.',
        },
        {
          type: 'paragraph',
          content:
            'Повторение карточек проходит в интерактивном формате посредством одного из двух встроенных игровых режимов.',
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
                content: 'TypeScript',
              },
            ],
            [
              {
                type: 'text',
                content: 'React',
              },
            ],
            [
              {
                type: 'text',
                content: 'Next.js',
              },
            ],
            [
              {
                type: 'text',
                content: 'Express',
              },
            ],
            [
              {
                type: 'text',
                content: 'Mongo DB',
              },
            ],
            [
              {
                type: 'text',
                content: 'Mongoose',
              },
            ],
            [
              {
                type: 'text',
                content: 'Service Workers',
              },
            ],
            [
              {
                type: 'text',
                content: 'LocalStorage',
              },
            ],
            [
              {
                type: 'text',
                content: 'JSON Web Tokens',
              },
            ],
            [
              {
                type: 'text',
                content: 'Google Custom Search API',
              },
            ],
            [
              {
                type: 'text',
                content: 'Docker',
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
                content: 'https://flashcards-ashenfox.duckdns.org',
                href: 'https://flashcards-ashenfox.duckdns.org',
                title: 'flashcards',
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
                href: 'https://flashcards-ashenfox.duckdns.org',
                title: 'github flashcards',
              },
            ],
          ],
        },
      ],
    ],
  },
};

export default flashcards;
