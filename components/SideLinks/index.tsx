import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAppSelector } from '../../store/hooks';
import SideLink, { ILink } from './SideLink';

interface OwnProps {}

type Props = OwnProps;

type TLinkArr = ILink[];

const SideLinksArr: TLinkArr = [
  {
    href: 'https://github.com/AshenFox',
    title: 'Github',
    iconName: 'github',
  },
  {
    href: 'https://t.me/ashenfox',
    title: 'LinkedIn',
    iconName: 'linkedin',
  },
  {
    href: 'https://t.me/ashenfox',
    title: 'Telegram',
    iconName: 'telegram',
  },
];

const SideLinks: FC<Props> = (props) => {
  const {
    content_loader: { is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const showNavigation = is_exited && show_navigation;

  return (
    <CSSTransition in={showNavigation} classNames='side-links' timeout={1000}>
      <ul className='side-links'>
        {SideLinksArr.map(({ href, title, iconName }, i) => (
          <SideLink key={i} href={href} title={title} iconName={iconName} />
        ))}
      </ul>
    </CSSTransition>
  );
};

export default SideLinks;
