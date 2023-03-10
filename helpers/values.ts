export interface IRoute {
  path: string;
  title: string;
  inbed?: TRoutesArr;
}

export type TRoutesArr = IRoute[];

export const routesOrderList: TRoutesArr = [
  { path: '/', title: 'about' },
  {
    path: '/portfolio',
    title: 'portfolio',
    inbed: [
      { path: '/flashcards', title: 'flashcards' },
      { path: '/tuner', title: 'tuner' },
      { path: '/portfolio', title: 'portfolio' },
    ],
  },
  { path: '/contact-page', title: 'contact page' },
];
