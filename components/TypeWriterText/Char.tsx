import React, { FC, useEffect, useRef, useState, memo } from 'react';

import { useActions } from '../../store/hooks';
import { createDots } from '../FallingParticles';

interface OwnProps {
  active: boolean;
  children?: string;
  isCursor?: boolean;
}

type Props = OwnProps;

const Char: FC<Props> = ({ active, children, isCursor }) => {
  const { set_cursor_position } = useActions();

  const charElRef = useRef<HTMLSpanElement>(null);
  const resizeListenerRef = useRef<(e: Event) => void>(null);
  const computedStyleRef = useRef<CSSStyleDeclaration>(null);

  const updateCursorPosition = () => {
    const rect = charElRef.current.getBoundingClientRect();

    const { x, y, width } = rect;

    set_cursor_position(x + width, y);
  };

  useEffect(() => {
    if (active && children && children !== ' ') {
      const rect = charElRef.current.getBoundingClientRect();

      const { x, y, width, height } = rect;

      const color = computedStyleRef.current.getPropertyValue('color');

      createDots(
        Math.round(x + width / 2),
        Math.round(y + height / 2),
        1,
        2,
        5,
        2,
        color,
        children.charCodeAt(0)
      );
    }
  }, [active]);

  useEffect(() => {
    if (!resizeListenerRef.current && isCursor) {
      resizeListenerRef.current = (e) => {
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
  }, [isCursor]);

  useEffect(() => {
    computedStyleRef.current = window.getComputedStyle(charElRef.current);
  }, []);

  return (
    <span className={`about__char ${active ? 'active' : ''}`} ref={charElRef}>
      {children}
    </span>
  );
};

export default memo(Char);
