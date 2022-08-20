import React, { MouseEventHandler, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Arrows = () => {
  const timeout: number = 950;

  const [value, setValue] = useState(true);

  const [isRightActive, setIsRightActive] = useState(true);
  const [isLeftActive, setIsLeftActive] = useState(true);

  const onArrowClick = () => setValue(false);

  useEffect(() => {
    if (value) {
      setIsRightActive(true);
      setIsLeftActive(true);
    } else {
      setTimeout(() => {
        setValue(true);
      }, 1500);
    }
  }, [value]);

  const onClickRightArrow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsRightActive(false);

    // router.push(nextPathname);
    setValue(false);

    console.log('Click right!');
  };

  const onClickLeftArrow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsLeftActive(false);

    // router.push(prevPathname);
    setValue(false);

    console.log('Click left!');
  };

  return (
    <>
      <button className='image-slider__test' onClick={onArrowClick}>
        Click
      </button>

      <div className='image-slider__arrow image-slider__arrow--left'>
        <CSSTransition
          classNames={'image-slider__arrow-container'}
          in={value}
          timeout={timeout}
          onExited={() => {}}
          appear
        >
          <div className='image-slider__arrow-container'>
            <CSSTransition
              classNames={'image-slider__arrow-button'}
              in={isLeftActive}
              timeout={timeout}
            >
              <button className='image-slider__arrow-button' onClick={onClickLeftArrow} />
            </CSSTransition>
            <div className='image-slider__arrow-icon' />
          </div>
        </CSSTransition>

        <div className='image-slider__arrow-shadow' />
      </div>

      <div className='image-slider__arrow image-slider__arrow--right'>
        <CSSTransition
          classNames={'image-slider__arrow-container'}
          in={value}
          timeout={timeout}
          onExited={() => {}}
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
                onClick={onClickRightArrow}
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
