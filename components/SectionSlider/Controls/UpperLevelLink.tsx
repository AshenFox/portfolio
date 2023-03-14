import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { MouseEventHandler, useCallback, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { getUpperLevelPath } from '../../../helpers/functions';
import { useAppSelector } from '../../../store/hooks';

const UpperLevelLink = () => {
  const router = useRouter();
  const { asPath } = router;

  const {
    content_loader: { is_exited: content_loader_is_exited },
    menu: { is_exited: menu_is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

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
      classNames={'uppper-level-link'}
      in={showLink}
      timeout={timeout}
      onEnter={onEnter}
      appear
    >
      <CSSTransition
        classNames={'uppper-level-link-clicked'}
        in={isClicked}
        timeout={timeout}
        appear
      >
        <Link href={upper_level_path}>
          <a className='uppper-level-link' onClick={onClick} title={`Back to ${title}`}>
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
