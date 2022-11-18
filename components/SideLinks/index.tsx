import Link from 'next/link';
import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAppSelector } from '../../store/hooks';
import Icons from '../Icons';

interface OwnProps {}

type Props = OwnProps;

const SideLinks: FC<Props> = (props) => {
  const {
    content_loader: { is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const showNavigation = is_exited && show_navigation;

  const TelegramIcon = Icons.telegram;
  const LinkInIcon = Icons.linkedin;
  const GithubIcon = Icons.github;

  return (
    <CSSTransition in={showNavigation} classNames='side-links' timeout={1000}>
      <ul className='side-links'>
        <Link href={'google.com'}>
          <li>
            <a title='Github' className='side-links__link-container github'>
              <div className={'side-links__link'}>
                <GithubIcon />
              </div>
            </a>
          </li>
        </Link>
        <Link href={'google.com'}>
          <li>
            <a title='LinkedIn' className='side-links__link-container linkedin'>
              <div className={'side-links__link'}>
                <LinkInIcon />
              </div>
            </a>
          </li>
        </Link>
        <Link href={'google.com'}>
          <li>
            <a title='Github' className='side-links__link-container telegram'>
              <div className={'side-links__link'}>
                <TelegramIcon />
              </div>
            </a>
          </li>
        </Link>
      </ul>
    </CSSTransition>
  );
};

export default SideLinks;
