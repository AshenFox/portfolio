import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  title: (to: string) => string;
}>;

const content: Content = {
  ENG: {
    title: to => `Back to ${to}`,
  },
  RU: {
    title: to => `Вернуться к ${to}`,
  },
};

export default content;
