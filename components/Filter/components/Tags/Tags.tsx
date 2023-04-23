import { TagListType, TagType } from '@components/Filter/Filter';
import React, { FC } from 'react';
import Tag from './components/Tag';
import styles from './styles.module.scss';

type TagsProps = {
  tagList: TagListType;
  by: TagType;
  onTagClickAction: (value: TagType) => void;
};

const Tags: FC<TagsProps> = ({ tagList, by, onTagClickAction }) => {
  return (
    <ul className={styles.tags}>
      {tagList.map(value => (
        <Tag
          key={value}
          value={value}
          active={value === by}
          onClickAction={onTagClickAction}
        >
          {value}
        </Tag>
      ))}
    </ul>
  );
};

export default Tags;
