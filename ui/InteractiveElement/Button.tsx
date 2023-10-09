import React, {
  forwardRef,
  memo,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import InteractiveElementInner from './InteractiveElementInner';
import { ColorType, IconName } from './types';
import styles from './styles.module.scss';

type Props = {
  children?: ReactNode;
  onClickAction?: MouseEventHandler<HTMLButtonElement>;
  isBig?: boolean;
  isActive?: boolean;
  color?: ColorType;
  icon?: IconName;
  classStr?: string;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      onClickAction = null,
      isBig = false,
      isActive = true,
      color = '',
      icon = '',
      classStr = '',
    },
    ref
  ) => {
    const [isClicked, setIsClicked] = useState(false);

    const className = [
      styles.interactiveElement,
      isClicked && isActive ? styles.interactiveElement : '',
      styles[color] ? styles[color] : styles.red,
      isBig ? styles.big : '',
      !children && icon ? styles.onlyicon : '',
      isActive ? '' : styles.inactive,
      classStr,
    ].join(' ');

    const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      e => {
        if (isActive) {
          onClickAction?.(e);
        }

        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 100);
      },
      [onClickAction, isActive]
    );

    return (
      <button className={className} onClick={onClick} ref={ref}>
        <InteractiveElementInner icon={icon}>{children}</InteractiveElementInner>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default memo(Button);
