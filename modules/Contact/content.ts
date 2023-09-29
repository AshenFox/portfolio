//workinprogress
import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  header: {
    title: string;
    description: {
      type: 'text' | 'link';
      text: string;
    }[];
  };
  footer: {
    header: string;
    paragraph: string;
  };
}>;

const content: Content = {
  ENG: {
    header: {
      title: 'Get In Touch',
      description: [
        {
          type: 'text',
          text: 'If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email to ',
        },
        {
          type: 'link',
          text: 'rafael@caferati.me',
        },
        {
          type: 'text',
          text: ' and ~let\u0027s talk.',
        },
      ],
    },
    footer: {
      header: 'Let\u0027s get social',
      paragraph:
        'Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin.',
    },
  },
  RU: {
    header: {
      title: 'Свяжитесь со мной ',
      description: [
        {
          type: 'text',
          text: 'Если хотите мне написать, поговорить о проекте или у вас есть предложение о сотрудничестве, заполните форму внизу или напишете мне на ',
        },
        {
          type: 'link',
          text: 'kavokinm@gmail.com',
        },
      ],
    },
    footer: {
      header: 'Соцсети',
      paragraph:
        'Подпишетесь на меня на моей странице в Facebook или на мои профили в Twitter, GitHub и Linkedin.',
    },
  },
};

export default content;
