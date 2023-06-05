import React, { FC, MouseEventHandler, useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { getPath, getUpperLevelPath } from '@helpers/functions';
import { CSSTransition } from 'react-transition-group';
import { ExitHandler } from 'react-transition-group/Transition';
import { useAppSelector } from '@store/hooks';
import styles from './styles.module.scss';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

const rightArrowClassNames: CSSTransitionClassNames = {
  exitActive: styles.right_out_active,
  exitDone: styles.right_out_done,
  enterActive: styles.right_in_active,
  enterDone: styles.right_in_done,
  appearActive: styles.right_in_active,
  appearDone: styles.right_in_done,
};

const leftArrowClassNames: CSSTransitionClassNames = {
  exitActive: styles.left_out_active,
  exitDone: styles.left_out_done,
  enterActive: styles.left_in_active,
  enterDone: styles.left_in_done,
  appearActive: styles.left_in_active,
  appearDone: styles.left_in_done,
};

const linkClassNames: CSSTransitionClassNames = {
  exitActive: styles.link_out_active,
  exitDone: styles.link_out_done,
};

type Props = {
  onExited: ExitHandler<HTMLDivElement>;
};

const Arrows: FC<Props> = ({ onExited }) => {
  const router = useRouter();
  const { asPath } = router;

  const {
    content_loader: { is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);
  const language = useAppSelector(({ language }) => language.language);

  const showNavigation = is_exited && show_navigation;
  const timeout: number = 950;

  const { path: nextPathname, title: nextTitle } = useMemo(
    () => getPath(asPath, 1),
    [asPath]
  );
  const { path: prevPathname, title: prevTitle } = useMemo(
    () => getPath(asPath, -1),
    [asPath]
  );

  const [isRightActive, setIsRightActive] = useState(true);
  const [isLeftActive, setIsLeftActive] = useState(true);

  const [isRightEnd, setIsRightEnd] = useState(false);
  const [isLeftEnd, setIsLeftEnd] = useState(false);

  const [rightTitle, setRightTitle] = useState(nextTitle);
  const [leftTitle, setLeftTitle] = useState(prevTitle);

  useEffect(() => {
    if (showNavigation) {
      setIsRightActive(true);
      setIsLeftActive(true);

      setIsRightEnd(nextPathname === asPath);
      setIsLeftEnd(prevPathname === asPath);

      setRightTitle(nextTitle);
      setLeftTitle(prevTitle);
    }
  }, [showNavigation]);

  const inRight = !isRightEnd && showNavigation;
  const inLeft = !isLeftEnd && showNavigation;

  const onClickRightArrow: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setIsRightActive(false);
    router.push(nextPathname);
  };

  const onClickLeftArrow: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setIsLeftActive(false);
    router.push(prevPathname);
  };

  leftTitle?.[language] ?? leftTitle;

  return (
    <>
      <CSSTransition
        classNames={rightArrowClassNames}
        in={inRight}
        timeout={timeout}
        onExited={onExited}
        appear
      >
        <div className={styles.right}>
          <CSSTransition classNames={linkClassNames} in={isRightActive} timeout={timeout}>
            <a
              className={styles.link}
              onClick={onClickRightArrow}
              href={nextPathname}
              title={rightTitle?.[language] ?? rightTitle}
            />
          </CSSTransition>
          <span className={styles.text}>{rightTitle?.[language] ?? rightTitle}</span>
          <div className={styles.arrow} />
        </div>
      </CSSTransition>
      <CSSTransition
        classNames={leftArrowClassNames}
        in={inLeft}
        timeout={timeout}
        onExited={onExited}
        appear
      >
        <div className={styles.left}>
          <CSSTransition classNames={linkClassNames} in={isLeftActive} timeout={timeout}>
            <a
              className={styles.link}
              onClick={onClickLeftArrow}
              href={prevPathname}
              title={leftTitle?.[language] ?? leftTitle}
            />
          </CSSTransition>
          <div className={styles.arrow} />
          <span className={styles.text}>{leftTitle?.[language] ?? leftTitle}</span>
        </div>
      </CSSTransition>
    </>
  );
};

export default Arrows;
