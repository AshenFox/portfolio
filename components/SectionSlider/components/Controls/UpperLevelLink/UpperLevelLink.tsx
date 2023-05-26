import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, MouseEventHandler, useCallback, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { getUpperLevelPath } from '../../../../../helpers/functions';
import { useAppSelector } from '../../../../../store/hooks';
import styles from './styles.module.scss';
import content from './content.json';

const classNamesLink: CSSTransitionClassNames = {
  exitActive: styles.upper_level_link_out_active,
  exitDone: styles.upper_level_link_out_done,
  enterActive: styles.upper_level_link_in_active,
  enterDone: styles.upper_level_link_in_done,
  appearActive: styles.upper_level_link_in_active,
  appearDone: styles.upper_level_link_in_done,
};

const classNamesLinkClicked: CSSTransitionClassNames = {
  enterActive: styles.upper_level_link_clicked_in_active,
  enterDone: styles.upper_level_link_clicked_in_done,
};

type Props = {};

const UpperLevelLink: FC<Props> = () => {
  const router = useRouter();
  const { asPath } = router;

  const {
    content_loader: { is_exited: content_loader_is_exited },
    menu: { is_exited: menu_is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);
  const language = useAppSelector(({ language }) => language.language);

  const [isClicked, setIsClicked] = useState(false);

  const timeout: number = 950;

  const { upper_level_path, level, title } = useMemo(
    () => getUpperLevelPath(asPath),
    [asPath]
  );

  const isUpperLevel = level > 0;

  const showLink =
    content_loader_is_exited && menu_is_exited && show_navigation && isUpperLevel;

  const onEnter = useCallback(() => {
    setIsClicked(false);
  }, []);

  const onClick: MouseEventHandler = useCallback(() => {
    setIsClicked(true);
  }, []);

  return (
    <CSSTransition
      classNames={classNamesLink}
      in={showLink}
      timeout={timeout}
      onEnter={onEnter}
      appear
    >
      <CSSTransition
        classNames={classNamesLinkClicked}
        in={isClicked}
        timeout={timeout}
        appear
      >
        <Link href={upper_level_path}>
          <a
            className={styles.upper_level_link}
            onClick={onClick}
            title={`${content[language].title} ${
              typeof title === 'string' ? title : title[language]
            }`}
          >
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </a>
        </Link>
      </CSSTransition>
    </CSSTransition>
  );
};

export default UpperLevelLink;
