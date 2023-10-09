import React, {
  FC,
  Touch,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
  memo,
} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useStateWithRef } from '../../helpers/hooks';
import Arrows from './components/Arrows';
import Controls from './components/Controls';
import SliderItem, { SliderItemClassNames } from './components/SliderItem';
import styles from './styles.module.scss';

export interface Image {
  path: string;
  alt: string;
}

export type Images = Image[];

type Props = {
  images: Images;
  title?: string;
};

const ImageSlider: FC<Props> = ({ images, title = '' }) => {
  const [activeID, setActiveID] = useState({ id: 0 });
  const [nextIDArr, setNextIDArr, nextIDArrRef] = useStateWithRef<
    { dir: 'right' | 'left'; id: number; isArrows?: boolean }[]
  >([]);

  const [dir, setDir] = useState({ dir: null });
  const [transition, setTransition] = useState(false);
  const [showArrows, setShowArrows] = useState(true);

  const data = images[activeID.id];

  const frameEl = useRef(null);

  const goToNext = (dir: 'right' | 'left') => {
    const next = {
      id: null,
      dir,
    };

    const arr = nextIDArr;
    const calcID = arr.length ? arr[arr.length - 1].id : activeID.id;

    if (dir === 'right') next.id = (calcID + 1) % images.length;
    if (dir === 'left') next.id = (calcID - 1 + images.length) % images.length;

    setNextIDArr([...nextIDArr, next]);
  };

  const goTo = (id: number) => {
    const arr = nextIDArr;
    const last = arr[arr.length - 1];

    if (arr.length && last && last.id === id) return;
    if (!arr.length && activeID.id === id) return;

    const dif = arr.length ? arr[arr.length - 1].id - id : activeID.id - id;

    setNextIDArr([...nextIDArr, { dir: dif < 0 ? 'right' : 'left', id }]);
  };

  const onControlItemClickCreator = (id: number) => () => {
    goTo(id);
  };

  const onImageExited = () => {
    setTransition(false);

    if (nextIDArrRef.current.length) {
      const { dir } = nextIDArrRef.current[0];

      setDir({ dir });

      return;
    } else {
      setShowArrows(true);
    }
  };

  useEffect(() => {
    if (nextIDArr.length && !transition) {
      const { dir } = nextIDArr[0];

      setDir({ dir });
    }
  }, [nextIDArr]);

  useEffect(() => {
    if (nextIDArr.length) {
      setTransition(true);

      const { id } = nextIDArr[0];

      setNextIDArr(nextIDArr.filter((el, i) => i !== 0));

      setTimeout(() => {
        setActiveID({ id });
      }, 50);
    }
  }, [dir]);

  const [touchActive, setTouchActive] = useState<Touch>(null);

  const onTouchStart: TouchEventHandler<HTMLDivElement> = e => {
    if (!touchActive) {
      const touchArr = Array.from(e.changedTouches);

      setTouchActive(touchArr[0]);
    }
  };

  const onTouchEnd: TouchEventHandler<HTMLDivElement> = e => {
    if (touchActive) {
      const touchArr = Array.from(e.changedTouches);
      const touch = touchArr.find(touch => touch.identifier === touchActive.identifier);

      if (touch) {
        const dif = touchActive.clientX - touch.clientX;

        if (Math.abs(dif) >= 50) {
          e.preventDefault();

          if (dif < 0) goToNext('left');
          if (dif > 0) goToNext('right');
        }
      }
    }

    setTouchActive(null);
  };

  const timeout = 825;

  return (
    <>
      <div className={styles.image_slider}>
        <div className={styles.bar}>
          <h2>{title}</h2>
        </div>
        <div
          className={styles.frame}
          ref={frameEl}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <TransitionGroup component={null}>
            {!!data && (
              <CSSTransition
                key={activeID.id}
                classNames={SliderItemClassNames}
                timeout={timeout}
                onExited={onImageExited}
              >
                <SliderItem data={data} dir={dir.dir} />
              </CSSTransition>
            )}
          </TransitionGroup>
          <Arrows
            showArrows={showArrows}
            setShowArrows={setShowArrows}
            transition={transition}
            setTransition={setTransition}
            goToNext={goToNext}
          />
        </div>
      </div>
      <Controls
        images={images}
        activeID={activeID.id}
        onClickCreator={onControlItemClickCreator}
      />
    </>
  );
};

export default memo(ImageSlider);
