import Filter, { FilterItemListData, TagNameList } from '@components/Filter';
import React, { FC } from 'react';
import { useAppSelector } from '@store/hooks';
import styles from './styles.module.scss';
import content from './content';

const Portfolio: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  return (
    <>
      <header>
        <h1 className={styles.title}>{content[language].title}</h1>
        <h3 className={styles.description}>{content[language].description}</h3>
      </header>

      <main className={styles.main}>
        <Filter
          filterItemList={content[language].filterItems}
          tagList={content[language].tagList}
        />
      </main>
    </>
  );
};

export default Portfolio;
