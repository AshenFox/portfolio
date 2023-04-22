import React, { CSSProperties, FC, useEffect, useRef, useState, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { ProjectsInt } from '../../Filter';
import Project from './Project/Project';
import styles from './styles.module.scss';

const classNames: CSSTransitionClassNames = {
  enter: styles.project_in,
  enterActive: styles.project_in_active,
  exitActive: styles.project_out_active,
};

interface OwnProps {
  order: string[];
  projects: ProjectsInt;
}

type Props = OwnProps;

const Projects: FC<Props> = ({ order, projects }) => {
  const timeout = 500; // 400

  const projectsEl = useRef<HTMLUListElement>(null);

  const [containerStyle, setContainerStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const el = projectsEl.current;

    const observer = new ResizeObserver(entries => {
      if (entries.length) {
        const [
          {
            contentRect: { height },
          },
        ] = entries;

        const transition = 'all 1s ease-in-out';

        setContainerStyle(prev => ({
          height: height,
          transition: height < prev.height ? transition : '',
        }));
      }
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container} style={containerStyle}>
      <ul className={styles.projects} ref={projectsEl}>
        {order.map(id => (
          <CSSTransition
            key={id}
            in={projects[id].in}
            classNames={classNames}
            timeout={timeout}
            unmountOnExit={true}
          >
            <Project data={projects[id]} order={order} />
          </CSSTransition>
        ))}
      </ul>
    </div>
  );
};

export default memo(Projects);
