import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  name: string;
  email: string;
  message: string;
}>;

const content: Content = {
  ENG: {
    name: 'Fill with your name',
    email: 'Your email address',
    message: 'Write your message :)',
  },
  RU: {
    name: 'Ваше имя',
    email: 'Ваш email',
    message: 'Ваше сообщение :)',
  },
};

export default content;
