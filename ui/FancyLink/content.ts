import { CreateContent } from '@helpers/types';

type Content = CreateContent<{
  success: string;
  error: string;
}>;

const content: Content = {
  ENG: {
    success: 'Link has been copied to clipboard',
    error: 'Failed to copy',
  },
  RU: {
    success: 'Ссылка скопирована',
    error: 'Ошибка при копировании ссылки',
  },
};

export default content;
