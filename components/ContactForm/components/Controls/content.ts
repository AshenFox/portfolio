import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  next: string;
  submit: string;
  submitNotification: {
    title: string;
    message: string;
  };
}>;

const content: Content = {
  ENG: {
    next: 'next',
    submit: 'submit your message',
    submitNotification: {
      title: 'Successful sumbit',
      message: 'Your message has been sent',
    },
  },
  RU: {
    next: 'далее',
    submit: 'отправить ваше сообщение',
    submitNotification: {
      title: 'Успешно отправлено',
      message: 'Ваше сообщение было отправлено',
    },
  },
};

export default content;
