import Link from 'next/link';
import React, { CSSProperties, FC, useEffect, useRef, useState, memo } from 'react';
import { FilterItemData } from '../../../content';
import styles from '../styles.module.scss';
import { useAppSelector } from '@store/hooks';

type Props = {
  data: FilterItemData;
  order: string[];
};

const FilterItem: FC<Props> = ({ data, order }) => {
  const { name, id, tags, thumbnails } = data;

  const language = useAppSelector(({ language }) => language.language);

  const filterItemEl = useRef<HTMLLIElement>(null);
  const containerEl = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [styleContainer, setStyleContainer] = useState<CSSProperties>({});

  const setProjectCoord = () => {
    const el = filterItemEl.current;

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
    }, 700);
  }, [order]);

  useEffect(() => {
    const el = filterItemEl.current;

    const observer = new ResizeObserver(entries => {
      if (entries.length) {
        const [
          {
            contentRect: { width, height },
          },
        ] = entries;

        const el = filterItemEl.current;

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

        if (entry[entry.length - 1].isIntersecting) {
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
    <li className={`${styles.filter_item} color${id}`} ref={filterItemEl}>
      <div
        className={styles.filter_item_container}
        ref={containerEl}
        style={styleContainer}
      >
        {isVisible && (
          <Link href={data.href} legacyBehavior>
            <a className={styles.link} title={data.name}>
              <div className={styles.bar}>
                <h2>{name}</h2>
              </div>
              <div className={styles.main}>
                <img src={thumbnails.main} alt='' className={styles.img_main} />
                <div className={styles.shadow}></div>
                <div className={styles.hover}>
                  <div className={styles.img_hover}>
                    <img src={thumbnails.hover} alt='' />
                  </div>

                  <ul className={styles.tags}>
                    {[...tags].splice(0, 4).map((tag, i) => (
                      <li className={styles.tag} key={i}>
                        {tag.content[language].label}
                      </li>
                    ))}
                  </ul>

                  <span className={styles.more}>more...</span>
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
    </li>
  );
};

export default memo(FilterItem);
