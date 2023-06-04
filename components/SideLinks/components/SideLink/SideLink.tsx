import Link from 'next/link';
import React, { FC } from 'react';
import Icons, { TIconName } from '../../../../ui/Icons';
import styles from './styles.module.scss';

export interface LinkData {
  href: string;
  title: string;
  iconName: TIconName;
}

interface Props extends LinkData {}

const SideLink: FC<Props> = ({ href, title, iconName }) => {
  const Icon = Icons[iconName];

  return (
    <Link href={href}>
      <li>
        <a title={title} className={`${styles.link_container} ${styles[iconName]}`}>
          <div className={styles.link}>
            <Icon />
          </div>
        </a>
      </li>
    </Link>
  );
};

export default SideLink;
