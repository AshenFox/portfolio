import React, {
  FC,
  ReactNode,
  useEffect,
  Dispatch,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { AppProps } from 'next/app';
import { useActions, useAppSelector } from '../../store/hooks';

interface OwnProps {
  classNameStr?: string;
  containerClassNameStr?: string;
  children: ReactNode;
}

export type Props = OwnProps & AppProps;

const Section = forwardRef<HTMLDivElement, Props>(
  ({ children, classNameStr = '', containerClassNameStr = '' }, ref) => {
    const { set_content_loaded } = useActions();

    const { dir } = useAppSelector(({ sslider }) => sslider);

    useEffect(() => {
      set_content_loaded(true);
    }, []);

    return (
      <section className={`section-slider__section ${dir} ${classNameStr}`}>
        <div className='section-slider__frame' onScroll={() => console.log('Fire!')}>
          <div
            className={`section-slider__frame-inner ${containerClassNameStr}`}
            ref={ref}
          >
            {children}
          </div>
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
