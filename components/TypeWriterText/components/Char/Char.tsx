import React, { FC, useEffect, useRef, useState, memo, useCallback } from 'react';
import { useOrientationChange } from '../../../../helpers/hooks';

import { useActions } from '../../../../store/hooks';
import { createDots } from '../../../FallingParticles';
import styles from './styles.module.scss';

type Props = {
  active: boolean;
  scrollTop?: number;
  children?: string;
  isCursor?: boolean;
};

const Char: FC<Props> = ({ active, children, isCursor, scrollTop = 0 }) => {
  const { set_cursor_position } = useActions();

  const charElRef = useRef<HTMLSpanElement>(null);
  const resizeListenerRef = useRef<(e: Event) => void>(null);
  const computedStyleRef = useRef<CSSStyleDeclaration>(null);

  const scrollTopRef = useRef(scrollTop);
  scrollTopRef.current = scrollTop;

  const updateCursorPosition = useCallback(() => {
    const rect = charElRef.current.getBoundingClientRect();

    const { x, y, width } = rect;

    set_cursor_position(x + width, y);
  }, [set_cursor_position]);

  useEffect(() => {
    if (active && children && children !== ' ') {
      const rect = charElRef.current.getBoundingClientRect();

      const { x, y, width, height } = rect;

      const color = computedStyleRef.current?.getPropertyValue('color');

      createDots(
        Math.round(x + width / 2),
        Math.round(y + scrollTopRef.current + height / 2),
        1,
        2,
        5,
        2,
        color,
        children.charCodeAt(0)
      );
    }
  }, [active, children]);

  useEffect(() => {
    if (!resizeListenerRef.current && isCursor) {
      resizeListenerRef.current = e => {
        updateCursorPosition();
      };
    }

    if (isCursor) {
      updateCursorPosition();

      window.addEventListener('resize', resizeListenerRef.current);
    } else {
      window.removeEventListener('resize', resizeListenerRef.current);
    }

    return () => {
      window.removeEventListener('resize', resizeListenerRef.current);
    };
  }, [isCursor, updateCursorPosition]);

  useOrientationChange(updateCursorPosition);

  useEffect(() => {
    computedStyleRef.current = window.getComputedStyle(charElRef.current);
  }, []);

  return (
    <span className={`${styles.char} ${active ? styles.active : ''}`} ref={charElRef}>
      {children}
    </span>
  );
};

export default memo(Char);
