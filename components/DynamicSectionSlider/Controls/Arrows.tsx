import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPath } from '../../../helpers/functions';
import { CSSTransition } from 'react-transition-group';
import { ExitHandler } from 'react-transition-group/Transition';

interface OwnProps {
  showNavigation: boolean;
  onExited: ExitHandler<HTMLDivElement>;
}

type Props = OwnProps;

const Arrows: FC<Props> = ({ onExited, showNavigation }) => {
  const router = useRouter();
  const { pathname } = router;

  const timeout: number = 950;

  const [isRightActive, setIsRightActive] = useState(true);
  const [isLeftActive, setIsLeftActive] = useState(true);

  useEffect(() => {
    if (showNavigation) {
      setIsRightActive(true);
      setIsLeftActive(true);
    }
  }, [showNavigation]);

  const nextPathname = getPath(pathname, 1);
  const prevPathname = getPath(pathname, -1);

  const onClickRightArrow: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    setIsRightActive(false);
    router.push(nextPathname);
  };

  const onClickLeftArrow: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    setIsLeftActive(false);
    router.push(prevPathname);
  };

  return (
    <>
      <CSSTransition
        classNames={'arrow__right'}
        in={showNavigation}
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
        timeout={timeout}
        in={showNavigation}
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
