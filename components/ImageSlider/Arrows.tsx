import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface OwnProps {
  showArrows: boolean;
  setShowArrows: React.Dispatch<React.SetStateAction<boolean>>;
  transition: boolean;
  setTransition: React.Dispatch<React.SetStateAction<boolean>>;
  dir: 'left' | 'right';
  setDir: React.Dispatch<React.SetStateAction<'left' | 'right'>>;
  goToPrev: () => void;
  goToNext: () => void;
}

type Props = OwnProps;

const Arrows: FC<Props> = ({
  showArrows,
  setShowArrows,
  transition,
  setTransition,
  dir,
  setDir,
  goToPrev,
  goToNext,
}) => {
  const timeout: number = 950;

  const [isRightActive, setIsRightActive] = useState(true);
  const [isLeftActive, setIsLeftActive] = useState(true);

  useEffect(() => {
    if (showArrows) {
      setIsRightActive(true);
      setIsLeftActive(true);
    }
  }, [showArrows]);

  const onClickArrowCreator: (
    dir: 'left' | 'right'
  ) => MouseEventHandler<HTMLButtonElement> = (dir) => (e) => {
    e.preventDefault();

    if (transition) return;

    setTransition(true);
    setShowArrows(false);
    // setDir(dir);

    if (dir === 'left') setIsLeftActive(false);
    if (dir === 'right') setIsRightActive(false);

    console.log(`Click ${dir}!`);
  };

  const onExited = () => {
    if (dir === 'left') goToPrev();
    if (dir === 'right') goToNext();
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
              in={isLeftActive}
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
          /* onExited={() => {}} */
          appear
        >
          <div className='image-slider__arrow-container'>
            <CSSTransition
              classNames={'image-slider__arrow-button'}
              in={isRightActive}
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
