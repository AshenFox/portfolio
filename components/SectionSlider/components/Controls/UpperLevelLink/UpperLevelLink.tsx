import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
  memo,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { getUpperLevelPath } from '@helpers/functions';
import { useAppSelector } from '@store/hooks';
import styles from './styles.module.scss';
import content from './content';

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

const UpperLevelLink: FC = () => {
  const router = useRouter();
  const { asPath } = router;

  const content_loader_is_exited = useAppSelector(
    ({ sslider }) => sslider.content_loader.is_exited
  );
  const show_navigation = useAppSelector(({ sslider }) => sslider.show_navigation);
  const is_exited = useAppSelector(({ sslider }) => sslider.menu.is_exited);
  const show_menu = useAppSelector(({ sslider }) => sslider.menu.show_menu);

  const language = useAppSelector(({ language }) => language.language);

  const [isClicked, setIsClicked] = useState(false);

  const timeout: number = 950;

  const { upper_level_path, level, title } = useMemo(
    () => getUpperLevelPath(asPath),
    [asPath]
  );
  const prevLevel = useRef(level);
  const linkTitle = content[language].title(
    typeof title === 'string' ? title : title?.[language]
  );

  const isUpperLevel = level > 0;

  const [savedIsUpperLevel, setSavedIsUpperLevel] = useState(isUpperLevel);

  // when the menu starts to open record isUpperLink value
  useEffect(() => {
    if (show_menu) {
      setSavedIsUpperLevel(isUpperLevel);
    }
  }, [isUpperLevel, show_menu]);

  const showLink =
    content_loader_is_exited &&
    show_navigation &&
    // while the menu is visible use saved isUpperLevel value
    (!show_menu && is_exited ? isUpperLevel : savedIsUpperLevel);

  const onEnter = useCallback(() => {
    setIsClicked(false);
  }, []);

  const onClick: MouseEventHandler = useCallback(() => {
    setIsClicked(true);
  }, []);

  useEffect(() => {
    return () => {
      prevLevel.current = level;
    };
  }, [level, show_navigation]);

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
        <Link href={upper_level_path} legacyBehavior>
          <a className={styles.upper_level_link} onClick={onClick} title={linkTitle}>
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

export default memo(UpperLevelLink);
