import { Project } from '../../types';
import FancyLink from '@ui/FancyLink';
import React, { FC, memo } from 'react';
import styles from './styles.module.scss';

type Props = {
  sections: Project['sections'];
};

const Sections: FC<Props> = ({ sections }) => {
  return (
    <>
      {sections.map((section, i) => {
        return (
          <section key={i} className={styles.section}>
            {section.map(el => {
              const { type } = el;

              if (type === 'header') {
                return <h2 className={styles.header}>{el.content}</h2>;
              } else if (type === 'description') {
                return <h3 className={styles.description}>{el.content}</h3>;
              } else if (type === 'devider') {
                return <div className={styles.devider} />;
              } else if (type === 'paragraph') {
                return <div className={styles.paragraph}>{el.content}</div>;
              } else if (type === 'list') {
                return (
                  <ul className={styles.list}>
                    {el.content.map((item, i) => (
                      <li key={i} className={styles.list_item}>
                        <span>
                          {item.map((element, i) => {
                            const { type, content, href, title } = element;

                            if (type === 'text') {
                              return <span key={i}>{content}</span>;
                            }

                            if (type === 'link') {
                              return (
                                <FancyLink key={i} href={href} title={title}>
                                  {content}
                                </FancyLink>
                              );
                            }

                            return null;
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </section>
        );
      })}
    </>
  );
};

export default memo(Sections);
