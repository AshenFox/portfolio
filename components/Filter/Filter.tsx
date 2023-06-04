import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import FilterItemList from './components/FilterItemList';
import TagList from './components/TagList';
import styles from './styles.module.scss';
import content from './content';
import { useAppSelector } from 'store/hooks';

export type TagName =
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

export type TagNameList = TagName[];

export type FilterItemData = {
  id: string;
  name: string;
  tags: TagNameList;
  in: boolean;
  thumbnails: {
    main: string;
    hover: string;
  };
};

export type FilterItemListData = {
  [key: string]: FilterItemData;
};

type Props = {
  filterItemList: FilterItemListData;
  tagList: TagNameList;
};

const Filter: FC<Props> = ({ filterItemList, tagList }) => {
  const language = useAppSelector(({ language }) => language.language);

  const [innerTagList] = useState<TagNameList>(['show all', ...tagList]);
  const [by, setBy] = useState<TagName>('show all');

  const [innerFilterItemList, setInnerFilterItemList] =
    useState<FilterItemListData>(filterItemList);

  const [order, setOrder] = useState<string[]>(Object.keys(innerFilterItemList));

  const isAll = by === 'show all';

  const filterProjects = useCallback(
    (by: TagName) => {
      const isAll = by === 'show all';

      const res: {
        filtered: string[];
        inArr: string[];
        projects: FilterItemListData;
      } = Object.entries(innerFilterItemList).reduce(
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
      setInnerFilterItemList(res.projects);
    },
    [innerFilterItemList]
  );

  const onTagClickAction = useCallback(
    (value: TagName) => {
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
      <TagList tagList={innerTagList} by={by} onTagClickAction={onTagClickAction} />
      <small className={styles.info}>
        {content[language].info(isAll ? content[language].all : by)}
      </small>
      <FilterItemList order={order} filterItemList={innerFilterItemList} />
    </div>
  );
};

export default memo(Filter);
