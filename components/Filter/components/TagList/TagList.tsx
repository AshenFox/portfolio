import { TagNameList, TagName } from '@components/Filter/Filter';
import React, { FC } from 'react';
import TagComponent from './components/Tag';
import styles from './styles.module.scss';

type Props = {
  tagList: TagNameList;
  by: TagName;
  onTagClickAction: (value: TagName) => void;
};

const TagList: FC<Props> = ({ tagList, by, onTagClickAction }) => {
  return (
    <ul className={styles.tags}>
      {tagList.map(value => (
        <TagComponent
          key={value}
          value={value}
          active={value === by}
          onClickAction={onTagClickAction}
        >
          {value}
        </TagComponent>
      ))}
    </ul>
  );
};

export default TagList;
