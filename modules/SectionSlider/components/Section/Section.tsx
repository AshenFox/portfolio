import React, { FC, ReactNode, useEffect, memo, ComponentProps } from 'react';
import { AppProps } from 'next/app';
import { useActions, useAppSelector } from '../../../../store/hooks';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import styles from './styles.module.scss';

export const SectionClassNames: CSSTransitionClassNames = {
  enter: styles.section_in,
  enterActive: styles.section_in_active,
  enterDone: styles.section_in_done,
};

type OwnProps = {
  classNameStr?: string;
  containerClassNameStr?: string;
  children: ReactNode;
  frameRef?: React.ForwardedRef<HTMLDivElement>;
  frameInnerRef?: React.ForwardedRef<HTMLDivElement>;
};

const Section: FC<AppProps & OwnProps> = memo(
  ({
    children,
    classNameStr = '',
    containerClassNameStr = '',
    frameRef,
    frameInnerRef,
  }) => {
    const { set_content_loaded } = useActions();

    const { dir } = useAppSelector(({ sslider }) => sslider);

    useEffect(() => {
      set_content_loaded(true);
    }, []);

    return (
      <section className={`${styles.section} ${styles[dir]} ${styles[classNameStr]}`}>
        <div className={styles.frame} ref={frameRef}>
          <div
            className={`${styles.frame_inner} ${containerClassNameStr}`}
            ref={frameInnerRef}
          >
            {children}
          </div>
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export type SectionProps = ComponentProps<typeof Section>;

export default Section;
