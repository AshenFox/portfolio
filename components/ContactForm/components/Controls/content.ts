import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  next: string;
  submit: string;
  submitNotification: {
    success: {
      title: string;
      message: string;
    };
    error: {
      title: string;
      message: string;
    };
  };
}>;

const content: Content = {
  ENG: {
    next: 'next',
    submit: 'submit your message',
    submitNotification: {
      success: {
        title: 'Successful sumbit',
        message: 'Your message has been sent',
      },
      error: {
        title: 'Something went wrong',
        message: 'Your message has not been sent :(',
      },
    },
  },
  RU: {
    next: 'далее',
    submit: 'отправить сообщение',
    submitNotification: {
      success: {
        title: 'Успешно отправлено',
        message: 'Ваше сообщение было отправлено',
      },
      error: {
        title: 'Что то пошло не так',
        message: 'Ваше сообщение не было отправлено :(',
      },
    },
  },
};

export default content;
