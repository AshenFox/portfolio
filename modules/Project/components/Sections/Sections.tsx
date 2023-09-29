//workinprogress
import { Project } from '../../types';
import FancyLink from '@ui/FancyLink';
import React, { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  sections: Project['sections'];
};

const Sections: FC<Props> = ({ sections }) => {
  return (
    <>
      {sections.map((section, i) => {
        /* const { header, description, paragraph, list } = section; */

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
                                <FancyLink key={i} href={href} title={title} thin>
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
            {/* <h2 className={styles.header}>{header}</h2>
            {description && <h3 className={styles.description}>{description}</h3>}
            {(paragraph || list) && <div className={styles.devider}></div>}
            {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
            {list && (
              <ul className={styles.list}>
                {section.list.map((item, i) => (
                  <li key={i} className={styles.list_item}>
                    <span>
                      {item.map((element, i) => {
                        const { type, content, href, title } = element;

                        if (type === 'text') {
                          return <span key={i}>{content}</span>;
                        }

                        if (type === 'link') {
                          return (
                            <FancyLink key={i} href={href} title={title} thin>
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
            )} */}
          </section>
        );
      })}
    </>
  );
};

export default Sections;

/* 
const Sections: FC<Props> = ({ sections }) => {
  return (
    <>
      {sections.map((section, i) => {
        const { header, description, paragraph, list } = section;

        return (
          <section key={i} className={styles.section}>
            <h2 className={styles.header}>{header}</h2>
            {description && <h3 className={styles.description}>{description}</h3>}
            {(paragraph || list) && <div className={styles.devider}></div>}
            {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
            {list && (
              <ul className={styles.list}>
                {section.list.map((item, i) => (
                  <li key={i} className={styles.list_item}>
                    <span>
                      {item.map((element, i) => {
                        const { type, content, href, title } = element;

                        if (type === 'text') {
                          return <span key={i}>{content}</span>;
                        }

                        if (type === 'link') {
                          return (
                            <FancyLink key={i} href={href} title={title} thin>
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
            )}
          </section>
        );
      })}
    </>
  );
};
*/
