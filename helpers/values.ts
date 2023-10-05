import { Language } from '@store/reducers/language/languageInitState';

export type TTitle =
  | {
      [key in Language]: string;
    }
  | string;

export interface IRoute {
  path: string;
  title: TTitle;
  inbed?: TRoutesArr;
  main?: boolean;
}

export type TRoutesArr = IRoute[];

export const routesOrderList: TRoutesArr = [
  { path: '/', title: { RU: 'главная', ENG: 'about' } },
  {
    path: '/portfolio',
    title: { RU: 'портфолио', ENG: 'portfolio' },
    inbed: [
      { path: '/flashcards', title: 'flashcards' },
      { path: '/gosurf', title: 'gosurf' },
      { path: '/tuner', title: 'tuner' },
      { path: '/natours', title: 'natours' },
      { path: '/portfolio', title: 'portfolio' },
      { path: '/nexter', title: 'nexter' },
      { path: '/glozzom', title: 'glozzom' },
    ],
  },
  { path: '/contact-page', title: { RU: 'контакты', ENG: 'contact page' } },
];
