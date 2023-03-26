import Link from 'next/link';
import React, { CSSProperties, FC, useEffect, useRef, useState, memo } from 'react';
import { ProjectInt, TagType } from '../..';
import Img from 'next/image';

interface OwnProps {
  data: ProjectInt;
  order: string[];
}

type Props = OwnProps;

const Project: FC<Props> = ({ data, order }) => {
  const { name, id, tags, thumbnails } = data;

  const projectEl = useRef<HTMLLIElement>(null);
  const containerEl = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [styleContainer, setStyleContainer] = useState<CSSProperties>({});

  const setProjectCoord = () => {
    const el = projectEl.current;

    const { offsetLeft, offsetTop } = el || {};

    setStyleContainer(prev => ({
      ...prev,
      top: `${offsetTop}px`,
      left: `${offsetLeft}px`,
    }));
  };

  useEffect(() => {
    setProjectCoord();

    setTimeout(() => {
      setProjectCoord();
    }, 700); // 700
  }, [order]);

  useEffect(() => {
    const el = projectEl.current;

    const observer = new ResizeObserver(entries => {
      if (entries.length) {
        const [
          {
            contentRect: { width, height },
          },
        ] = entries;

        const el = projectEl.current;

        const { offsetLeft, offsetTop } = el || {};

        setStyleContainer(prev => ({
          ...prev,
          height: `${height}px`,
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

  const intersectionObserverTimer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entry => {
        clearTimeout(intersectionObserverTimer.current);

        if (entry[0].isIntersecting) {
          setIsVisible(true);
        } else {
          intersectionObserverTimer.current = setTimeout(() => {
            setIsVisible(false);
          }, 1500);
        }
      },
      { rootMargin: '500px 0px 500px' }
    );

    if (containerEl.current) observer.observe(containerEl.current);

    return () => {
      observer.disconnect();
    };
  }, [id]);

  return (
    <li className={`filter__project color${id}`} ref={projectEl}>
      <div className='filter__project-container' ref={containerEl} style={styleContainer}>
        {isVisible && (
          <Link href={'/portfolio/flashcards'}>
            <a className='filter__project-link' title='/portfolio/flashcards'>
              <div className='filter__project-bar'>
                <h2>{name}</h2>
              </div>
              <div className='filter__project-main'>
                <Img
                  src={thumbnails.main}
                  alt=''
                  className='filter__project-img-main'
                  layout='fill'
                />
                <div className='filter__project-shadow'></div>
                <div className='filter__project-hover'>
                  <div className='filter__project-img-hover'>
                    <Img src={thumbnails.hover} alt='' layout='fill' />
                  </div>

                  <ul className='filter__project-tags'>
                    {[...tags].splice(0, 4).map((tag, i) => (
                      <li className='filter__project-tag' key={i}>
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <span className='filter__project-more'>more...</span>
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
    </li>
  );
};

export default memo(Project);
