import { HeaderListData } from '@components/TypeWriterText/TypeWriterText';
import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  typewriter_text: HeaderListData;
  barrier: string;
}>;

const content: Content = {
  ENG: {
    typewriter_text: [
      {
        content: [{ content: 'Hello, my name is Rafael Caferati.', type: 'text' }],
        type: 'greeting',
      },
      {
        content: [
          { content: 'I am an ', type: 'text' },
          {
            content: 'award-winning',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          {
            content: ' full-stack web developer and UI/UX javascript specialist.',
            type: 'text',
          },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content:
              'Check out my articles, React and React Native UI components at the ',
            type: 'text',
          },
          {
            content: 'code laboratory',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          { content: '.', type: 'text' },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'Feel free to take a look at my latest projects on the ',
            type: 'text',
          },
          {
            content: 'web portfolio page',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          { content: '.', type: 'text' },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'Remotely available UTC-1 to UTC+8. ',
            type: 'text',
          },
          {
            content: 'rafael@caferati.me',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
        ],
        type: 'description',
      },
    ],
    barrier: 'my portfolio',
  },
  RU: {
    typewriter_text: [
      {
        content: [{ content: 'Тест тесттест тесттесттест тесттесттест.', type: 'text' }],
        type: 'greeting',
      },
      {
        content: [
          { content: 'тесттесттест ', type: 'text' },
          {
            content: 'тесттесттест',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          {
            content: ' тесттесттест тесттест тест.',
            type: 'text',
          },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'Тесттесттесттесттесттест ',
            type: 'text',
          },
          {
            content: 'тесттесттест',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          { content: ' тест.', type: 'text' },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'тесттесттесттест ',
            type: 'text',
          },
          {
            content: 'тесттест',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          { content: ' тесттесттест.', type: 'text' },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'Тесттесттесттест тесттест. ',
            type: 'text',
          },
          {
            content: 'rafael@caferati.me',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
        ],
        type: 'description',
      },
    ],
    barrier: 'мое портфолио',
  },
};

export default content;
