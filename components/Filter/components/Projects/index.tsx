import React, { CSSProperties, FC, useEffect, useRef, useState, memo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProjectsInt, TagType } from '../..';
import Project from './Project';

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
    <div className='filter__projects-container' style={containerStyle}>
      <ul className='filter__projects' ref={projectsEl}>
        {order.map(id => (
          <CSSTransition
            key={id}
            in={projects[id].in}
            classNames='filter__project'
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
