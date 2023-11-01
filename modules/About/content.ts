import { HeaderListData } from '@components/TypeWriterText/TypeWriterText';
import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  typewriter_text: HeaderListData;
  barrier: string;
}>;

const years = Math.abs(
  new Date(Date.now() - new Date('01-01-2020').getTime()).getUTCFullYear() - 1970
);

const content: Content = {
  ENG: {
    typewriter_text: [
      {
        content: [{ content: 'Hello, my name is Kavokin Maxim.', type: 'text' }],
        type: 'greeting',
      },
      {
        content: [
          {
            content: `I am a highly skilled frontend react developer with more than ${years} years of experience.`,
            type: 'text',
          },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'My passion is creating of modern ',
            type: 'text',
          },
          {
            content: 'SPA and SSR',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          { content: ' applications and ', type: 'text' },
          {
            content: 'websites',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          { content: ' using React and TypeScript.', type: 'text' },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'Feel free to take a look at the ',
            type: 'text',
          },
          {
            content: 'portfolio page',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          {
            content: ' that showcases a diverse range of my latest projects.',
            type: 'text',
          },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'If you have any questions, you can reach me through ',
            type: 'text',
          },
          {
            content: 'kavokinm@gmail.com',
            type: 'link',
            props: { href: '/contact-page', title: 'Contact page' },
          },
        ],
        type: 'description',
      },
    ],
    barrier: 'portfolio',
  },
  RU: {
    typewriter_text: [
      {
        content: [{ content: 'Привет, меня зовут Кавокин Максим.', type: 'text' }],
        type: 'greeting',
      },

      {
        content: [
          {
            content: `Я frontend react developer с более чем ${years} годами профессионального опыта в сфере разработки.`,
            type: 'text',
          },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'Моей страстью является создание современных ',
            type: 'text',
          },
          {
            content: 'SPA и SSR',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          {
            content: ' приложений и ',
            type: 'text',
          },
          {
            content: 'сайтов',
            type: 'link',
            props: { href: '/portfolio', title: 'Portfolio' },
          },
          {
            content: ' используя React и TypeScript.',
            type: 'text',
          },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'Посмотрите мое ',
            type: 'text',
          },
          {
            content: 'портфолио',
            type: 'link',
            props: { href: '/portfolio', title: 'Портфолио' },
          },
          { content: ', чтобы увидеть примеры моих последних проектов.', type: 'text' },
        ],
        type: 'description',
      },
      {
        content: [
          {
            content: 'Если у вас есть вопросы, пишите мне на ',
            type: 'text',
          },
          {
            content: 'kavokinm@gmail.com',
            type: 'link',
            props: { href: '/contact-page', title: 'Контакты' },
          },
        ],
        type: 'description',
      },
    ],
    barrier: 'портфолио',
  },
};

export default content;
