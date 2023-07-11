import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  default_message: string;
}>;

const content: Content = {
  ENG: {
    default_message: 'Page does not exist',
  },
  RU: {
    default_message: 'Страница не существует',
  },
};

export default content;
