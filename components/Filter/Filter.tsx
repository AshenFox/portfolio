import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import FilterItems from './components/FilterItems';
import Tags from './components/Tags';
import styles from './styles.module.scss';
import content from './content.json';
import { useAppSelector } from 'store/hooks';
import { replaceRegExp } from 'helpers/functions';

export type TTag =
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

export type TTagList = TTag[];

const tagList: TTagList = [
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

export interface IFilterItem {
  id: string;
  name: string;
  tags: TTagList;
  in: boolean;
  thumbnails: {
    main: string;
    hover: string;
  };
}

export interface IFilterItems {
  [key: string]: IFilterItem;
}

type Props = {
  initFilterItems: IFilterItems;
};

const Filter: FC<Props> = ({ initFilterItems }) => {
  const language = useAppSelector(({ language }) => language.language);

  const [by, setBy] = useState<TTag>('show all');

  const [filterItems, setFilterItems] = useState<IFilterItems>(initFilterItems);

  const [order, setOrder] = useState<string[]>(Object.keys(filterItems));

  const isAll = by === 'show all';

  const filterProjects = useCallback(
    (by: TTag) => {
      const isAll = by === 'show all';

      const res: {
        filtered: string[];
        inArr: string[];
        projects: IFilterItems;
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
    (value: TTag) => {
      setBy(value);
      filterProjects(value);
    },
    [filterProjects]
  );

  useEffect(() => {
    filterProjects('show all');
  }, []);

  console.log(replaceRegExp('all'));

  return (
    <div className={styles.filter}>
      <Tags tagList={tagList} by={by} onTagClickAction={onTagClickAction} />
      <small className={styles.info}>
        {content[language].info.replace(
          replaceRegExp('all'),
          isAll ? content[language].all : by
        )}
      </small>
      <FilterItems order={order} filterItems={filterItems} />
    </div>
  );
};

export default memo(Filter);
