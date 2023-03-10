import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPath, getUpperLevelPath } from '../../../helpers/functions';
import { CSSTransition } from 'react-transition-group';
import { ExitHandler } from 'react-transition-group/Transition';
import { useAppSelector } from '../../../store/hooks';

interface OwnProps {
  onExited: ExitHandler<HTMLDivElement>;
}

type Props = OwnProps;

const Arrows: FC<Props> = ({ onExited }) => {
  const router = useRouter();
  const { asPath } = router;

  const {
    content_loader: { is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const showNavigation = is_exited && show_navigation;
  const timeout: number = 950;

  const [isRightActive, setIsRightActive] = useState(true);
  const [isLeftActive, setIsLeftActive] = useState(true);

  const [isRightEnd, setIsRightEnd] = useState(false);
  const [isLeftEnd, setIsLeftEnd] = useState(false);

  useEffect(() => {
    if (showNavigation) {
      setIsRightActive(true);
      setIsLeftActive(true);

      setIsRightEnd(nextPathname === asPath);
      setIsLeftEnd(prevPathname === asPath);
    }
  }, [showNavigation]);

  const nextPathname = getPath(asPath, 1); // UseMemo??
  const prevPathname = getPath(asPath, -1); // UseMemo??

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

  return (
    <>
      <CSSTransition
        classNames={'arrow__right'}
        in={inRight}
        timeout={timeout}
        onExited={onExited}
        appear
      >
        <div className='arrow__right'>
          <CSSTransition classNames={'arrow__link'} in={isRightActive} timeout={timeout}>
            <a
              className='arrow__link'
              onClick={onClickRightArrow}
              href={nextPathname}
              title='Next'
            />
          </CSSTransition>
          <span className='arrow__text'>next</span>
          <div className='arrow__arrow' />
        </div>
      </CSSTransition>
      <CSSTransition
        classNames={'arrow__left'}
        in={inLeft}
        timeout={timeout}
        onExited={onExited}
        appear
      >
        <div className='arrow__left'>
          <CSSTransition classNames={'arrow__link'} in={isLeftActive} timeout={timeout}>
            <a
              className='arrow__link'
              onClick={onClickLeftArrow}
              href={prevPathname}
              title='Prev'
            />
          </CSSTransition>
          <div className='arrow__arrow' />
          <span className='arrow__text'>prev</span>
        </div>
      </CSSTransition>
    </>
  );
};

export default Arrows;
