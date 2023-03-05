import React, {
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react';
import NextLink from 'next/link';
import InteractiveElementInner from './InteractiveElementInner';
import { ColorType, TIcon } from './types';

type LinkProps = {
  children?: ReactNode;
  isBig?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  color?: ColorType;
  icon?: TIcon;
  href?: string;
  title?: string;
  classStr?: string;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      isBig = false,
      isActive = true,
      isLoading,
      color = 'red',
      icon = '',
      href = '',
      title = '',
      classStr = '',
    },
    ref
  ) => {
    const [isClicked, setIsClicked] = useState(false);

    const isLoadingRef = useRef(isLoading);
    isLoadingRef.current = isLoading;

    const className = [
      'interactive-element',
      isClicked && (isLoading ?? true) && isActive ? 'interactive-element__click' : '',
      color,
      isBig ? 'big' : '',
      !children && icon ? 'onlyicon' : '',
      isActive ? '' : 'inactive',
      classStr,
    ].join(' ');

    useEffect(() => {
      if (!isLoading) {
        setIsClicked(false);
      }
    }, [isLoading]);

    const onClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
      e => {
        setIsClicked(true);
        setTimeout(() => {
          if (!isLoadingRef.current) {
            setIsClicked(false);
          }
        }, 100);
      },
      [setIsClicked]
    );

    return (
      <NextLink href={href}>
        <a className={className} title={title} ref={ref} onClick={onClick}>
          <InteractiveElementInner icon={icon}>{children}</InteractiveElementInner>
        </a>
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
