import { Content } from '../types';

const flashcards: Content = {
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
};

export default flashcards;
