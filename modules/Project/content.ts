import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  not_found_message: string;
}>;

const content: Content = {
  ENG: {
    not_found_message: 'Project has not been found',
  },
  RU: {
    not_found_message: 'Проект не найден',
  },
};

export default content;
