import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  info: (all: string) => string;
  all: string;
}>;

const content: Content = {
  ENG: {
    info: all =>
      `Showing ${all} projects. Use the filter to list them by skill or technology.`,
    all: 'all',
  },
  RU: {
    info: all => `Тест ${all} тест тест.`,
    all: 'все',
  },
};

export default content;
