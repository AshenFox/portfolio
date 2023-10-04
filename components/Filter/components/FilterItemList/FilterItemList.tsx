import React, { CSSProperties, FC, useEffect, useRef, useState, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { FilterItemListData } from '../../Filter';
import FilterItem from './components/FilterItem';
import styles from './styles.module.scss';

const timeout = 500; // 400

const classNames: CSSTransitionClassNames = {
  enter: styles.filter_item_in,
  enterActive: styles.filter_item_in_active,
  exitActive: styles.filter_item_out_active,
};

type Props = {
  order: string[];
  filterItemList: FilterItemListData;
};

const FilterItemsList: FC<Props> = ({ order, filterItemList }) => {
  const filterItemsInt = useRef<HTMLUListElement>(null);

  const [containerStyle, setContainerStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const el = filterItemsInt.current;

    const observer = new ResizeObserver(entries => {
      if (entries.length) {
        const [
          {
            contentRect: { height },
          },
        ] = entries;

        const transition = 'all 1s ease-in-out';

        setContainerStyle(prev => ({
          height: height,
          transition: height < prev.height ? transition : '',
        }));
      }
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container} style={containerStyle}>
      <ul className={styles.filter_items} ref={filterItemsInt}>
        {order.map(id => (
          <CSSTransition
            key={id}
            in={filterItemList[id].in}
            classNames={classNames}
            timeout={timeout}
            unmountOnExit={true}
          >
            <FilterItem data={filterItemList[id]} order={order} />
          </CSSTransition>
        ))}
      </ul>
    </div>
  );
};

export default memo(FilterItemsList);
