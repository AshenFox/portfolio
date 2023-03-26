import Link from 'next/link';
import React, { FC } from 'react';
import Icons, { TIconName } from '../../../ui/Icons';

export interface ILink {
  href: string;
  title: string;
  iconName: TIconName;
}

interface OwnProps extends ILink {}

type Props = OwnProps;

const SideLink: FC<Props> = ({ href, title, iconName }) => {
  const Icon = Icons[iconName];

  return (
    <Link href={href}>
      <li>
        <a title={title} className={`side-links__link-container ${iconName}`}>
          <div className={'side-links__link'}>
            <Icon />
          </div>
        </a>
      </li>
    </Link>
  );
};

export default SideLink;
