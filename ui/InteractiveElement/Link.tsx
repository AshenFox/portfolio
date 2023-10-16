import React, {
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useRef,
  useState,
  useEffect,
  memo,
} from 'react';
import NextLink from 'next/link';
import InteractiveElementInner from './InteractiveElementInner';
import { ColorType, IconName } from './types';
import styles from './styles.module.scss';

type Props = {
  children?: ReactNode;
  isBig?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  color?: ColorType;
  icon?: IconName;
  href?: string;
  title?: string;
  classStr?: string;
};

const Link = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      children,
      isBig = false,
      isActive = true,
      isLoading,
      color = '',
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
      styles.interactiveElement,
      isClicked && (isLoading ?? true) && isActive ? styles.click : '',
      styles[color] ? styles[color] : styles.red,
      isBig ? styles.big : '',
      !children && icon ? styles.onlyicon : '',
      isActive ? '' : styles.inactive,
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
      <NextLink href={href} legacyBehavior>
        <a className={className} title={title} ref={ref} onClick={onClick}>
          <InteractiveElementInner icon={icon}>{children}</InteractiveElementInner>
        </a>
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default memo(Link);
