import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import FilterItems from './components/FilterItems';
import Tags from './components/Tags';
import styles from './styles.module.scss';

export type TagType =
  | 'show all'
  | 'front-end'
  | 'back-end'
  | 'html5'
  | 'sass'
  | 'less'
  | 'javascript'
  | 'nodejs'
  | 'electron'
  | 'reactjs'
  | 'meteor'
  | 'coffeescript'
  | 'mongodb'
  | 'mysql'
  | 'backbonejs'
  | 'ui/ux design'
  | 'animations'
  | 'game design';

export type TagListType = TagType[];

const tagList: TagListType = [
  'show all',
  'front-end',
  'back-end',
  'html5',
  'sass',
  'less',
  'javascript',
  'nodejs',
  'electron',
  'reactjs',
  'meteor',
  'coffeescript',
  'mongodb',
  'mysql',
  'backbonejs',
  'ui/ux design',
  'animations',
  'game design',
];

export interface FilterItemInt {
  id: string;
  name: string;
  tags: TagType[];
  in: boolean;
  thumbnails: {
    main: string;
    hover: string;
  };
}

export interface FilterItemsInt {
  [key: string]: FilterItemInt;
}

interface OwnProps {}

type Props = OwnProps;

const value: FilterItemsInt = {
  '1': {
    id: '1',
    name: 'test1',
    tags: ['back-end', 'coffeescript'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '2': {
    id: '2',
    name: 'test2',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '3': {
    id: '3',
    name: 'test3',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '4': {
    id: '4',
    name: 'test4',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '5': {
    id: '5',
    name: 'test5',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '6': {
    id: '6',
    name: 'test6',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '7': {
    id: '7',
    name: 'test7',
    tags: ['back-end', 'coffeescript'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '8': {
    id: '8',
    name: 'test8',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '9': {
    id: '9',
    name: 'test9',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '10': {
    id: '10',
    name: 'test10',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '11': {
    id: '11',
    name: 'test11',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '12': {
    id: '12',
    name: 'test12',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '13': {
    id: '13',
    name: 'test13',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '14': {
    id: '14',
    name: 'test14',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '15': {
    id: '15',
    name: 'test15',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '16': {
    id: '16',
    name: 'test16',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '17': {
    id: '17',
    name: 'test17',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
};

const Filter: FC<Props> = props => {
  const [by, setBy] = useState<TagType>('show all');

  const [filterItems, setFilterItems] = useState<FilterItemsInt>(value);

  const [order, setOrder] = useState<string[]>(Object.keys(filterItems));

  const isAll = by === 'show all';

  const filterProjects = useCallback(
    (by: TagType) => {
      const isAll = by === 'show all';

      const res: {
        filtered: string[];
        inArr: string[];
        projects: FilterItemsInt;
      } = Object.entries(filterItems).reduce(
        (res, [id, data], i, arr) => {
          const prevIn = data.in;
          const newIn = isAll || data.tags.includes(by);

          const newFilterItem = {
            ...data,
            in: newIn,
          };

          res.projects[id] = newFilterItem;

          if (newIn) {
            res.inArr.push(id);
            if (prevIn) res.filtered = [...res.filtered, ...res.inArr.splice(0, 1)];
          } else {
            res.filtered.push(id);
          }

          if (arr.length === i + 1) res.filtered = [...res.filtered, ...res.inArr];

          return res;
        },
        { filtered: [], inArr: [], projects: {} }
      );

      setOrder(res.filtered);
      setFilterItems(res.projects);
    },
    [filterItems]
  );

  const onTagClickAction = useCallback(
    (value: TagType) => {
      setBy(value);
      filterProjects(value);
    },
    [filterProjects]
  );

  useEffect(() => {
    filterProjects('show all');
  }, []);

  return (
    <div className={styles.filter}>
      <Tags tagList={tagList} by={by} onTagClickAction={onTagClickAction} />
      <small className={styles.info}>
        Showing {isAll ? 'all' : by} projects. Use the filter to list them by skill or
        technology.
      </small>
      <FilterItems order={order} filterItems={filterItems} />
    </div>
  );
};

export default memo(Filter);
