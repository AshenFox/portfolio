import Link from 'next/link';
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ProjectInt } from '..';

interface OwnProps {
  data: ProjectInt;
  list: string[];
}

type Props = OwnProps;

const colors = {
  '1': 'red',
  '2': 'yellow',
  '3': 'green',
  '4': 'orange',
  '5': 'blue',
  '6': 'cyan',
};

const Project: FC<Props> = ({ data, list }) => {
  const { name, id } = data;

  const projectEl = useRef<HTMLLIElement>(null);
  const containerEl = useRef<HTMLDivElement>(null);

  const setProjectCoord = () => {
    const el = projectEl.current;

    const { offsetLeft, offsetTop } = el || {};

    setStyleContainer((prev) => ({
      ...prev,
      top: `${offsetTop}px`,
      left: `${offsetLeft}px`,
    }));
  };

  useEffect(() => {
    setProjectCoord();

    setTimeout(() => {
      setProjectCoord();
    }, 600);
  }, [list]);

  useEffect(() => {
    const el = projectEl.current;

    const observer = new ResizeObserver((entries) => {
      if (entries.length) {
        const [
          {
            contentRect: { width },
          },
        ] = entries;

        const el = projectEl.current;

        const { offsetLeft, offsetTop } = el || {};

        setStyleContainer((prev) => ({
          ...prev,
          width: `${width}px`,
          top: `${offsetTop}px`,
          left: `${offsetLeft}px`,
        }));
      }
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const [styleContainer, setStyleContainer] = useState<CSSProperties>({});

  const styleMain: CSSProperties = { backgroundColor: colors[(+id % 6) + 1] };

  return (
    <li className={`filter__project ${id}`} ref={projectEl}>
      <div className='filter__project-container' ref={containerEl} style={styleContainer}>
        <Link href={'/'}>
          <a className='filter__project-link' title='/'>
            <div className='filter__project-bar'>
              <h2>{name}</h2>
            </div>
            <div className='filter__project-main' style={styleMain}>
              <img src='/6.jpg' alt='' className='filter__project-img-main' />
              <div className='filter__project-hover'>
                <div className='filter__project-img-hover'>
                  <img src='/7.jpg' alt='' />
                </div>

                <ul className='filter__project-tags'>
                  <li className='filter__project-tag'>back-end</li>
                  <li className='filter__project-tag'>front-end</li>
                  <li className='filter__project-tag'>html5</li>
                  <li className='filter__project-tag'>sass</li>
                </ul>

                <span className='filter__project-more'>more...</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default Project;
