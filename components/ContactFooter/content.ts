//workinprogress
import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  header: string;
  paragraphs: {
    text: string;
    link?: {
      text: string;
      href: string;
      title?: string;
    };
  }[];
}>;

const content: Content = {
  ENG: {
    header: 'Let\u0027s talk',
    paragraphs: [
      {
        text: 'Wanna get in touch or talk about a project?',
      },
      {
        text: 'Feel free to contact me via email at\u00A0',
        link: {
          text: 'kavokinm@gmail.com',
          href: '/contact-page',
        },
      },
      {
        text: 'or drop a line in the form at the\u00A0',
        link: {
          text: 'contact page',
          href: '/contact-page',
          title: 'Contact page',
        },
      },
    ],
  },
  RU: {
    header: 'Давайте поговорим',
    paragraphs: [
      {
        text: 'Хотите связаться со мной или поговорить о проекте?',
      },
      {
        text: 'Напишите мне на ',
        link: {
          text: 'kavokinm@gmail.com',
          href: '/contact-page',
        },
      },
      {
        text: 'Или отправте сообщение через форму на странице ',
        link: {
          text: 'контакты',
          href: '/contact-page',
          title: 'контакты',
        },
      },
    ],
  },
};

export default content;
