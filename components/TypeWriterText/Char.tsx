import React, { FC, useEffect, useRef, useState, memo } from 'react';
import { createDots } from '../../pages';
import { useActions } from '../../store/hooks';

interface OwnProps {
  active: boolean;
  children?: string;
  isCursor?: boolean;
}

type Props = OwnProps;

const Char: FC<Props> = ({ active, children, isCursor }) => {
  const { set_cursor_position } = useActions();

  // const moveCursorRef = useRef(false);
  const charElRef = useRef<HTMLSpanElement>(null);
  const resizeListenerRef = useRef<(e: Event) => void>(null);

  // console.log({ isCursor });

  const updateCursorPosition = () => {
    const rect = charElRef.current.getBoundingClientRect();

    const { x, y, width } = rect;

    set_cursor_position(x + width, y);
  };

  useEffect(() => {
    if (active && children) {
      const rect = charElRef.current.getBoundingClientRect();

      const { x, y, width, height } = rect;

      createDots(
        Math.round(x + width / 2),
        Math.round(y + height),
        2,
        2.5,
        5,
        3,
        'white'
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

  return (
    <span className={`about__char ${active ? 'active' : ''}`} ref={charElRef}>
      {children}
    </span>
  );
};

export default memo(Char);

/* 


const observer = new ResizeObserver((entries) => {
      if (entries.length) {
        const [
          {
            contentRect: { height },
          },
        ] = entries;

        const transition = 'all 1s ease-in-out';

        setContainerStyle((prev) => ({
          height: height,
          transition: height < prev.height ? transition : '',
        }));
      }
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };

*/
