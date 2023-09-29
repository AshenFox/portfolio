//workinprogress
import { Content } from '../types';

const flashcards: Content = {
  ENG: {
    title: 'flashcards',
    description: `SSR приложение для эффективного запоминания информации 
    через интервальное повторение и интерактивные и увлекательные игры.`,
    link: {
      href: 'https://flashcards.ashen-fox.online/',
      content: 'flashcards',
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
          content: 'Данное приложение дает возможность:',
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
            'Созданные карточки можно добавлять в специальный “режим изучения”, после чего приложение будет присылать уведомления через увеличивающиеся временные интервалы, напоминая, что нужно повторить добавленные карточки, для максимально эффективного запоминания информации.',
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
          content: 'Технологии которые я использовал работая над этим проектом.',
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
                content: 'ServiceWorkers',
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
                content: 'https://flashcards.ashen-fox.online',
                href: 'https://flashcards.ashen-fox.online',
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
                href: 'https://flashcards.ashen-fox.online',
                title: 'github flashcards',
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
      href: 'https://flashcards.ashen-fox.online/',
      content: 'flashcards',
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
          content: 'Данное приложение дает возможность:',
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
      ],
      [
        {
          type: 'header',
          content: 'Список технологий',
        },
        {
          type: 'description',
          content: 'Технологии которые я использовал работая над этим проектом.',
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
                content: 'ServiceWorkers',
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
          type: 'list',
          content: [
            [
              {
                type: 'text',
                content: 'Проект размещен на ',
              },
              {
                type: 'link',
                content: 'https://flashcards.ashen-fox.online',
                href: 'https://flashcards.ashen-fox.online',
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
                href: 'https://flashcards.ashen-fox.online',
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

/* const flashcards: Content = {
  ENG: {
    title: 'flashcards',
    description:
      'Built with custom VanillaJS Web Components and written entirely on Javascript, this website is a showcase of my recent projects as a Full-Stack Web Developer.',
    link: {
      href: 'https://fox-flash-cards.herokuapp.com',
      content: 'visit the webpage',
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
      {
        header: 'About this project',
        paragraph:
          'Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.\n\nAt this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.',
      },
      {
        header: 'Technical Sheet',
        description:
          'Code technologies I got involved with while working on this project.',
        list: [
          [
            {
              type: 'text',
              content: 'UI/UX Design',
            },
          ],
          [
            {
              type: 'text',
              content: 'UI/UX Architecture',
            },
          ],
          [
            {
              type: 'text',
              content: 'UI/UX Animations',
            },
          ],
          [
            {
              type: 'text',
              content: 'HTML5 – semantic, audio, video, canvas',
            },
          ],
          [
            {
              type: 'text',
              content: 'CSS3 – preprocessed with LESS + LESSHAT',
            },
          ],
          [
            {
              type: 'text',
              content: 'Meteor.js',
            },
          ],
          [
            {
              type: 'text',
              content: 'Blaze',
            },
          ],
          [
            {
              type: 'text',
              content: 'MongoDB',
            },
          ],
        ],
      },
      {
        header: 'Resources',
        list: [
          [
            {
              type: 'text',
              content: 'The project is online at ',
            },
            {
              type: 'link',
              content: 'HTTPS://ROCKET.CHAT',
              href: 'https://rocket.chat',
              title: 'test',
            },
          ],
          [
            {
              type: 'text',
              content: 'Access the project\u0024s source on GITHUB',
            },
          ],
        ],
      },
    ],
  },
  RU: {
    title: 'flashcards',
    description: `SSR приложение для эффективного запоминания информации 
    через интервальное повторение и интерактивные и увлекательные игры.`,
    link: {
      href: 'https://flashcards.ashen-fox.online/',
      content: 'flashcards',
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
      {
        header: 'О проекте',
        paragraph: 'Данное приложение дает возможность:',
        list: [
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
        header: 'Список технологий',
        description: 'Технологии которые я использовал работая над этим проектом.',
        list: [
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
              content: 'ServiceWorkers',
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
      {
        header: 'Ресурсы',
        list: [
          [
            {
              type: 'text',
              content: 'Проект размещен на ',
            },
            {
              type: 'link',
              content: 'https://flashcards.ashen-fox.online',
              href: 'https://flashcards.ashen-fox.online',
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
              href: 'https://flashcards.ashen-fox.online',
              title: 'github flashcards',
            },
          ],
        ],
      },
    ],
  },
}; */
