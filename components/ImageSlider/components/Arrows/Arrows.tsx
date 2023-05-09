import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './styles.module.scss';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

const ButtonClassNames: CSSTransitionClassNames = {
  exitActive: styles.button_out_active,
  exitDone: styles.button_out_done,
};

const ContainerClassNames: CSSTransitionClassNames = {
  enterActive: styles.container_in_active,
  appearActive: styles.container_in_active,
  exitActive: styles.container_out_active,
  exitDone: styles.container_out_done,
};

interface OwnProps {
  showArrows: boolean;
  setShowArrows: React.Dispatch<React.SetStateAction<boolean>>;
  transition: boolean;
  setTransition: React.Dispatch<React.SetStateAction<boolean>>;
  goToNext: (dir: 'left' | 'right') => void;
}

type Props = OwnProps;

const Arrows: FC<Props> = ({ showArrows, setShowArrows, transition, goToNext }) => {
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
  ) => MouseEventHandler<HTMLButtonElement> = useCallback(
    dir => e => {
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
    },
    [goToNext, setShowArrows, transition]
  );

  const onExited = useCallback(() => {
    setIsLeftExited(true);
    setIsRightExited(true);

    if (isDuringTransitionRef.current) {
      isDuringTransitionRef.current = false;
      return;
    }

    if (!isRightActive) goToNext('right');
    if (!isLeftActive) goToNext('left');
  }, [goToNext, isLeftActive, isRightActive]);

  return (
    <>
      <div className={`${styles.arrow} ${styles.left}`}>
        <CSSTransition
          classNames={ContainerClassNames}
          in={showArrows}
          timeout={timeout}
          onExited={onExited}
          appear
        >
          <div className={styles.container}>
            <CSSTransition
              classNames={ButtonClassNames}
              in={isLeftActive && isLeftExited}
              timeout={timeout}
            >
              <button className={styles.button} onClick={onClickArrowCreator('left')} />
            </CSSTransition>
            <div className={styles.icon} />
          </div>
        </CSSTransition>

        <div className={styles.shadow} />
      </div>

      <div className={`${styles.arrow} ${styles.right}`}>
        <CSSTransition
          classNames={ContainerClassNames}
          in={showArrows}
          timeout={timeout}
          appear
        >
          <div className={styles.container}>
            <CSSTransition
              classNames={ButtonClassNames}
              in={isRightActive && isRightExited}
              timeout={timeout}
            >
              <button className={styles.button} onClick={onClickArrowCreator('right')} />
            </CSSTransition>
            <div className={styles.icon} />
          </div>
        </CSSTransition>

        <div className={styles.shadow} />
      </div>
    </>
  );
};

export default Arrows;
