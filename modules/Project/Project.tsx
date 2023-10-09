import ImageSlider from '@components/ImageSlider';
import { Link } from '@ui/InteractiveElement';
import { useRouter } from 'next/router';
import React, { FC, useMemo, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import projectsContent from './projectsContent';
import content from './content';
import { useAppSelector } from '@store/hooks';
import Sections from './components/Sections';
import NotFound from '@modules/NotFound';

const Project: FC = () => {
  const router = useRouter();
  const { query } = router;
  const { _id } = query;

  const [staticID, setStaticID] = useState<string>(null);

  const language = useAppSelector(({ language }) => language.language);

  useEffect(() => {
    if (_id && typeof _id === 'string' && !staticID) {
      setStaticID(_id);
    }
  }, [_id, staticID]);

  const not_found_message = content[language].not_found_message;
  const project = useMemo(
    () => Object.entries(projectsContent).find(([id]) => id === staticID)?.[1][language],
    [language, staticID]
  );

  const projectNotFound = useMemo(() => !!(!project && staticID), [project, staticID]);

  if (projectNotFound) return <NotFound message={not_found_message} />;

  return (
    <>
      <header>
        <h1 className={styles.title}>{project?.title}</h1>
        <h3 className={styles.description}>{project?.description}</h3>
        <div className={styles.links}>
          <div>
            <Link
              color='green'
              icon='externallink'
              href={project?.link.href}
              title={project?.link.title}
            >
              {project?.link.content}
            </Link>
          </div>
          <div className={styles.links_right}>
            <div className={styles.links_hide}>
              <Link
                color='blue'
                icon='facebook'
                href='https://facebook.com'
                title='Facebook'
                classStr='hide'
              />
              <Link
                color='skyblue'
                icon='twitter'
                href='https://twitter.com'
                title='Twitter'
                classStr='hide'
              />
            </div>

            <Link
              color='red'
              icon='googleplus'
              href='https://google.com'
              title='Google Plus'
            />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <ImageSlider images={project?.images ?? []} title={project?.title} />
        <Sections sections={project?.sections ?? []} />
      </main>
    </>
  );
};

export default Project;
