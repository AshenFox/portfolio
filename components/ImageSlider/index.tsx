import React, { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Arrows from './Arrows';
import Controls from './Controls';
import SliderItem from './SliderItem';

export interface Image {
  path: string;
  alt: string;
}

export type Images = Image[];

interface OwnProps {}

type Props = OwnProps;

const ImageSlider: FC<Props> = () => {
  const [images, setImages] = useState<Images>([
    {
      path: '/6.jpg',
      alt: 'image',
    },
    {
      path: '/5.jpg',
      alt: 'image',
    },
    {
      path: '/4.jpg',
      alt: 'image',
    },
  ]);

  const [activeID, setActiveID] = useState(0);
  const [nextIDArr, setNextIDArr] = useState<{ dir: 'right' | 'left'; id: number }[]>([]);
  const nextIDArrRef = useRef(nextIDArr);
  nextIDArrRef.current = nextIDArr;

  const [dir, setDir] = useState({ dir: null });
  const [transition, setTransition] = useState(false);
  const [showArrows, setShowArrows] = useState(true);

  const data = images[activeID];

  /* const goToNext = () => setActiveID((activeID + 1) % images.length);

  const goToPrev = () => setActiveID((activeID - 1 + images.length) % images.length);

  const goTo = (id: number) => {
    if (id !== activeID) {
      const dif = activeID - id;
      dif < 0 ? setDir('right') : setDir('left');

      setTransition(true);

      setTimeout(() => {
        setActiveID(id);
      }, 0);

      // setActiveID(id);
    }
  }; */

  const addIdToNextIDArr = (id: number) => {
    const arr = nextIDArr;
    const last = arr[0];

    if (arr.length && last && last.id === id) return;
    if (!arr.length && activeID === id) return;

    const dif = arr.length ? arr[arr.length - 1].id - id : activeID - id;

    setNextIDArr([...nextIDArr, { dir: dif < 0 ? 'right' : 'left', id }]);
  };

  const onControlItemClickCreator = (id: number) => () => {
    addIdToNextIDArr(id);
  };

  const onExited = () => {
    setShowArrows(true);

    // console.log(nextIDArr);

    if (nextIDArrRef.current.length) {
      setTransition(true);

      const { dir } = nextIDArrRef.current[0];

      setDir({ dir });
    } else {
      setTransition(false);
    }

    console.log('onExited', { nextIDArr, dir, transition });
  };

  /* useEffect(() => {
    console.log(dir);
  }, [dir]); */

  useEffect(() => {
    if (nextIDArr.length === 1 && !transition) {
      setTransition(true);

      const { dir } = nextIDArr[0];

      setDir({ dir });
    }
  }, [nextIDArr]);

  useEffect(() => {
    if (nextIDArr.length) {
      const { id } = nextIDArr[0];

      setNextIDArr(nextIDArr.filter((el, i) => i !== 0));

      setTimeout(() => {
        setActiveID(id);
      }, 100);
    }
  }, [dir]);

  const timeout = 825;

  console.log('render', { nextIDArr, dir, transition });

  return (
    <>
      <div className='image-slider'>
        <div className='image-slider__bar'>
          <h2>flashcards</h2>
        </div>
        <div className='image-slider__frame'>
          <TransitionGroup component={null}>
            <CSSTransition
              key={activeID}
              classNames='image-slider__item'
              timeout={timeout}
              onExited={onExited}
            >
              <SliderItem data={{ id: activeID, ...data }} dir={dir.dir} />
            </CSSTransition>
          </TransitionGroup>
          {/* <Arrows
            showArrows={showArrows}
            setShowArrows={setShowArrows}
            transition={transition}
            setTransition={setTransition}
            dir={dir}
            setDir={setDir}
            goToNext={goToNext}
            goToPrev={goToPrev}
          /> */}
        </div>
      </div>
      <Controls
        images={images}
        activeID={activeID}
        onClickCreator={onControlItemClickCreator}
      />
    </>
  );
};

export default ImageSlider;

/* {images.map((data) => (
              <SliderItem data={data} />
            ))} */

/* 
            
            const ImageSlider: FC<Props> = () => {
  const [images, setImages] = useState<Images>([
    {
      path: '/6.jpg',
      alt: 'image',
    },
    {
      path: '/5.jpg',
      alt: 'image',
    },
    {
      path: '/4.jpg',
      alt: 'image',
    },
  ]);

  const [activeID, setActiveID] = useState(0);
  const [nextIDArr, setNextIDArr] = useState([]);

  const [dir, setDir] = useState(null);
  const [transition, setTransition] = useState(false);
  const [showArrows, setShowArrows] = useState(true);

  // const data = images.find((el) => el.id === activeID);
  const data = images[activeID];
  // const { path, alt } = data;

  const goToNext = () => setActiveID((activeID + 1) % images.length);

  const goToPrev = () => setActiveID((activeID - 1 + images.length) % images.length);

  const goTo = (id: number) => {
    if (id !== activeID) {
      const dif = activeID - id;
      dif < 0 ? setDir('right') : setDir('left');

      setTransition(true);

      setTimeout(() => {
        setActiveID(id);
      }, 0);
    }
  };

  const onControlItemClickCreator = (id: number) => () => {
    if (transition) return;

    goTo(id);
  };

  const onExited = () => {
    setShowArrows(true);
    setTransition(false);
  };

  useEffect(() => {

  }, [nextIDArr])

  const timeout = 825;

  return (
    <>
      <div className='image-slider'>
        <div className='image-slider__bar'>
          <h2>flashcards</h2>
        </div>
        <div className='image-slider__frame'>
          <TransitionGroup component={null}>
            <CSSTransition
              key={activeID}
              classNames='image-slider__item'
              timeout={timeout}
              onExited={onExited}
            >
              <SliderItem data={{ id: activeID, ...data }} dir={dir} />
            </CSSTransition>
          </TransitionGroup>
          <Arrows
            showArrows={showArrows}
            setShowArrows={setShowArrows}
            transition={transition}
            setTransition={setTransition}
            dir={dir}
            setDir={setDir}
            goToNext={goToNext}
            goToPrev={goToPrev}
          />
        </div>
      </div>
      <Controls
        images={images}
        activeID={activeID}
        onClickCreator={onControlItemClickCreator}
      />
    </>
  );
};

export default ImageSlider;
            
            */
