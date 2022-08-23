import React, { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface OwnProps {
  showArrows: boolean;
  setShowArrows: React.Dispatch<React.SetStateAction<boolean>>;
  transition: boolean;
  setTransition: React.Dispatch<React.SetStateAction<boolean>>;
  goToNext: (dir: 'left' | 'right', isArrows?: boolean) => void;
}

type Props = OwnProps;

const Arrows: FC<Props> = ({
  showArrows,
  setShowArrows,
  transition,
  setTransition,
  goToNext,
}) => {
  const timeout: number = 950;

  const [isRightActive, setIsRightActive] = useState(true);
  const [isLeftActive, setIsLeftActive] = useState(true);

  const [isLeftExited, setIsLeftExited] = useState(true);
  const [isRightExited, setIsRightExited] = useState(true);

  const isDuringTransitionRef = useRef(false);

  useEffect(() => {
    if (showArrows) {
      setIsLeftActive(true);
      setIsRightActive(true);
    }
  }, [showArrows]);

  const onClickArrowCreator: (
    dir: 'left' | 'right'
  ) => MouseEventHandler<HTMLButtonElement> = (dir) => (e) => {
    e.preventDefault();

    setShowArrows(false);

    if (dir === 'left') {
      setIsLeftActive(false);
      setIsLeftExited(false);
    }
    if (dir === 'right') {
      setIsRightActive(false);
      setIsRightExited(false);
    }

    if (transition) {
      isDuringTransitionRef.current = true;
      goToNext(dir);

      return;
    }

    // setTransition(true);
  };

  const onExited = () => {
    setIsLeftExited(true);
    setIsRightExited(true);

    if (isDuringTransitionRef.current) {
      isDuringTransitionRef.current = false;
      return;
    }

    if (!isRightActive) goToNext('right');
    if (!isLeftActive) goToNext('left');
  };

  return (
    <>
      <div className='image-slider__arrow image-slider__arrow--left'>
        <CSSTransition
          classNames={'image-slider__arrow-container'}
          in={showArrows}
          timeout={timeout}
          onExited={onExited}
          appear
        >
          <div className='image-slider__arrow-container'>
            <CSSTransition
              classNames={'image-slider__arrow-button'}
              in={isLeftActive && isLeftExited}
              timeout={timeout}
            >
              <button
                className='image-slider__arrow-button'
                onClick={onClickArrowCreator('left')}
              />
            </CSSTransition>
            <div className='image-slider__arrow-icon' />
          </div>
        </CSSTransition>

        <div className='image-slider__arrow-shadow' />
      </div>

      <div className='image-slider__arrow image-slider__arrow--right'>
        <CSSTransition
          classNames={'image-slider__arrow-container'}
          in={showArrows}
          timeout={timeout}
          appear
        >
          <div className='image-slider__arrow-container'>
            <CSSTransition
              classNames={'image-slider__arrow-button'}
              in={isRightActive && isRightExited}
              timeout={timeout}
            >
              <button
                className='image-slider__arrow-button'
                onClick={onClickArrowCreator('right')}
              />
            </CSSTransition>
            <div className='image-slider__arrow-icon' />
          </div>
        </CSSTransition>

        <div className='image-slider__arrow-shadow' />
      </div>
    </>
  );
};

export default Arrows;

/* 

<>
      <button className='image-slider__test' onClick={onArrowClick}>
        Click
      </button>
      <CSSTransition
        classNames={'image-slider__arrow--left'}
        in={value}
        timeout={timeout}
        onExited={() => {}}
        appear
      >
        <div className='image-slider__arrow image-slider__arrow--left'>
          <CSSTransition
            classNames={'image-slider__arrow-button'}
            in={isLeftActive}
            timeout={timeout}
          >
            <button className='image-slider__arrow-button' onClick={onClickLeftArrow} />
          </CSSTransition>
          <div className='image-slider__arrow-icon' />
          <div className='image-slider__arrow-shadow' />
        </div>
      </CSSTransition>

      <CSSTransition
        classNames={'image-slider__arrow--right'}
        in={value}
        timeout={timeout}
        onExited={() => {}}
        appear
      >
        <div className='image-slider__arrow image-slider__arrow--right'>
          <CSSTransition
            classNames={'image-slider__arrow-button'}
            in={isRightActive}
            timeout={timeout}
          >
            <button className='image-slider__arrow-button' onClick={onClickRightArrow} />
          </CSSTransition>
          <div className='image-slider__arrow-icon' />
          <div className='image-slider__arrow-shadow' />
        </div>
      </CSSTransition>
    </>


*/
