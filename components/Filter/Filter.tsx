import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import FilterItemList from './components/FilterItemList';
import TagList from './components/TagList';
import styles from './styles.module.scss';
import content, {
  allTag,
  FilterItemListData,
  TagID,
  TagValue,
  TagValueList,
} from './content';
import { useAppSelector } from 'store/hooks';

type Props = {
  filterItemList: FilterItemListData;
  tagList: TagValueList;
};

const Filter: FC<Props> = ({ filterItemList, tagList }) => {
  const language = useAppSelector(({ language }) => language.language);

  const [innerTagList] = useState<TagValueList>([allTag, ...tagList]);
  const [by, setBy] = useState<TagValue>(allTag);

  const [innerFilterItemList, setInnerFilterItemList] =
    useState<FilterItemListData>(filterItemList);

  const [order, setOrder] = useState<string[]>(Object.keys(innerFilterItemList));

  const isAll = by.id === 'show all';

  const filterProjects = useCallback(
    (by: TagID) => {
      const isAll = by === 'show all';

      const res: {
        filtered: string[];
        inArr: string[];
        projects: FilterItemListData;
      } = Object.entries(innerFilterItemList).reduce(
        (res, [id, data], i, arr) => {
          const prevIn = data.in;
          const newIn = isAll || data.tags.some(tag => tag.id === by);

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
    (value: TagValue) => {
      setBy(value);
      filterProjects(value.id);
    },
    [filterProjects]
  );

  useEffect(() => {
    filterProjects('show all');
  }, []);

  return (
    <div className={styles.filter}>
      <TagList tagList={innerTagList} by={by.id} onTagClickAction={onTagClickAction} />
      <small className={styles.info}>
        {content[language].info(
          isAll ? content[language].all : by.content[language].label
        )}
      </small>
      <FilterItemList order={order} filterItemList={innerFilterItemList} />
    </div>
  );
};

export default memo(Filter);
