import { Content } from '../types';

const portfolio: Content = {
  ENG: {
    title: 'portfolio',
    description: `SSR portfolio application, built using Next.js and TypeScript, highlighting my most recent projects that I've been working on.`,
    link: {
      href: 'https://github.com/AshenFox/portfolio',
      content: 'application',
      title: 'portfolio',
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
          content: `\u0009I\u0027ve crafted this project using Next.js and TypeScript to create an interactive and responsive portfolio website, that showcases my latest project.`,
        },

        {
          type: 'paragraph',
          content: `One of the main features I implemented, was the idea of seamless animated transitions between the pages of the SRR. These fluid transitions add a dynamic touch to the user experience, making navigation between different sections and pages a visually pleasing journey.`,
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
                content: 'Redux',
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
                content: 'LocalStorage',
              },
            ],

            [
              {
                type: 'text',
                content: 'Docker',
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
                content: 'React-Transition-Group',
              },
            ],
          ],
        },
      ],
      [
        {
          type: 'header',
          content: 'Inspiration',
        },
        {
          type: 'devider',
        },
        {
          type: 'paragraph',
          content: `\u0009While the implementation of all the project's elements, structure, and animations was done solely by me from the ground up, the source of the inspiration and design was the portfolio website of front-end developer Rafael Caferati. The link to his portfolio project is in the resources section below.`,
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
                content: 'https://github.com/AshenFox/portfolio',
                href: 'https://github.com/AshenFox/portfolio',
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
                href: 'https://github.com/AshenFox/portfolio',
                title: 'github flashcards',
              },
              {
                type: 'text',
                content: ' page',
              },
            ],
            [
              {
                type: 'text',
                content: 'Portfolio project by Rafael Caferati ',
              },
              {
                type: 'link',
                content: 'https://caferati.me/',
                href: 'https://caferati.me/',
                title: 'Rafael Caferati portfolio',
              },
            ],
          ],
        },
      ],
    ],
  },
  RU: {
    title: 'portfolio',
    description: `SSR приложение портфолио, созданное с помощью Next.js и TypeScript, демонстрирующее последние проекты над которыми я работал.`,
    link: {
      href: 'https://github.com/AshenFox/portfolio',
      content: 'application',
      title: 'portfolio',
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
          content: `\u0009Работая над этим проектом моей целью было создать интерактивный и адаптивный сайт портфолио используя технологии Next.js и Typescript.`,
        },

        {
          type: 'paragraph',
          content: `Одной из главных идей, которую я воплотил в жизнь, был бесшовный анимированый переход между страницами SSR приложения. Такие плавные переходы, добавляют динамики в работу с сайтом, делая навигагацию между разными секциями и страницами визуально приятным путешествием.`,
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
                content: 'Redux',
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
                content: 'LocalStorage',
              },
            ],

            [
              {
                type: 'text',
                content: 'Docker',
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
                content: 'React-Transition-Group',
              },
            ],
          ],
        },
      ],
      [
        {
          type: 'header',
          content: 'Вдохновение',
        },
        {
          type: 'devider',
        },
        {
          type: 'paragraph',
          content: `\u0009Хотя исполнение всех элементов сайта, анимаций и структуры было выполнено мной с нуля, источником вдохновения стал сайт портфолио front-end разработчика Rafael\u00A0Caferati. Ссылка на его портфолио находится в секции ресурсы ниже.`,
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
                content: 'Проект размещен на  ',
              },
              {
                type: 'link',
                content: 'https://github.com/AshenFox/portfolio',
                href: 'https://github.com/AshenFox/portfolio',
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
                href: 'https://github.com/AshenFox/portfolio',
                title: 'github flashcards',
              },
            ],
            [
              {
                type: 'text',
                content: 'Сайт портфолио Rafael Caferati ',
              },
              {
                type: 'link',
                content: 'https://caferati.me/',
                href: 'https://caferati.me/',
                title: 'Rafael Caferati portfolio',
              },
            ],
          ],
        },
      ],
    ],
  },
};

export default portfolio;
