import { TagValueList, TagValue, TagID } from '../../content';
import React, { FC, memo } from 'react';
import TagComponent from './components/Tag';
import styles from './styles.module.scss';
import { useAppSelector } from '@store/hooks';

type Props = {
  tagList: TagValueList;
  by: TagID;
  onTagClickAction: (value: TagID) => void;
};

const TagList: FC<Props> = ({ tagList, by, onTagClickAction }) => {
  const language = useAppSelector(({ language }) => language.language);

  return (
    <ul className={styles.tags}>
      {tagList.map(tag => (
        <TagComponent
          key={tag.id}
          value={tag.id}
          active={tag.id === by}
          onClickAction={onTagClickAction}
        >
          {tag.content[language].label}
        </TagComponent>
      ))}
    </ul>
  );
};

export default memo(TagList);
