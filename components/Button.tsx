import React, {
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import InteractiveElementInner from './InteractiveElementInner';
import { ColorType, TIcon } from './types';

interface OwnProps {
  children?: ReactNode;
  onClickAction?: MouseEventHandler<HTMLButtonElement>;
  isBig?: boolean;
  isActive?: boolean;
  color?: ColorType;
  icon?: TIcon;
  classStr?: string;
}

type Props = OwnProps;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      onClickAction = null,
      isBig = false,
      isActive = true,
      color = 'red',
      icon = '',
      classStr = '',
    },
    ref
  ) => {
    const [isClicked, setIsClicked] = useState(false);

    const className = [
      'interactive-element',
      isClicked && isActive ? 'interactive-element__click' : '',
      color,
      isBig ? 'big' : '',
      !children && icon ? 'onlyicon' : '',
      isActive ? '' : 'inactive',
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

export default Button;
