import React, { FC, ReactNode, useEffect, memo } from 'react';
import { AppProps } from 'next/app';
import { useActions, useAppSelector } from '../../../store/hooks';

interface OwnProps {
  classNameStr?: string;
  containerClassNameStr?: string;
  children: ReactNode;
  frameRef?: React.ForwardedRef<HTMLDivElement>;
  frameInnerRef?: React.ForwardedRef<HTMLDivElement>;
}

export type SectionProps = OwnProps & AppProps;

const Section: FC<SectionProps> = ({
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
    <section className={`section-slider__section ${dir} ${classNameStr}`}>
      <div className='section-slider__frame' ref={frameRef}>
        <div
          className={`section-slider__frame-inner ${containerClassNameStr}`}
          ref={frameInnerRef}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

Section.displayName = 'Section';

export default memo(Section);
