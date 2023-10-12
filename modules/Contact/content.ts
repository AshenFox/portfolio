import { CreateContent } from '@helpers/types';

type Text = {
  type: 'text';
  text: string;
};

type Link = {
  type: 'link';
  text: string;
  href: string;
};

type Content = CreateContent<{
  header: {
    title: string;
    description: (Text | Link)[];
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
          text: 'kavokinm@gmail.com',
          href: 'kavokinm@gmail.com',
        },
        {
          type: 'text',
          text: ' and let\u0027s talk.',
        },
      ],
    },
    footer: {
      header: 'Let\u0027s get social',
      paragraph: 'Follow my page on LinkedIn and profile on GitHub.',
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
          href: 'kavokinm@gmail.com',
        },
        {
          type: 'text',
          text: '.',
        },
      ],
    },
    footer: {
      header: 'Соцсети',
      paragraph: 'Подпишетесь на меня на GitHub и Linkedin.',
    },
  },
};

export default content;
