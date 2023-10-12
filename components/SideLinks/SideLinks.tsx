import React, { FC, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { useAppSelector } from '@store/hooks';
import SideLink, { LinkData } from './components/SideLink';
import styles from './styles.module.scss';

const classNames: CSSTransitionClassNames = {
  enter: styles.side_links_in,
  enterDone: styles.side_links_in_done,
  exit: styles.side_links_out,
  exitDone: styles.side_links_out_done,
};

type LinkDataList = LinkData[];

const SideLinksArr: LinkDataList = [
  {
    href: 'https://github.com/AshenFox',
    title: 'Github',
    iconName: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/max-kavokin-46a667254/',
    title: 'LinkedIn',
    iconName: 'linkedin',
  },
];

const SideLinks: FC = () => {
  const {
    content_loader: { is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const showNavigation = is_exited && show_navigation;

  return (
    <CSSTransition in={showNavigation} classNames={classNames} timeout={1000}>
      <ul className={styles.side_links}>
        {SideLinksArr.map(({ href, title, iconName }, i) => (
          <SideLink key={i} href={href} title={title} iconName={iconName} />
        ))}
      </ul>
    </CSSTransition>
  );
};

export default memo(SideLinks);
