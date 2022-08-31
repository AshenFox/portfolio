import React, { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProjectsInt } from '..';
import Project from './Project';

interface OwnProps {
  order: string[];
  projects: ProjectsInt;
}

type Props = OwnProps;

const Projects: FC<Props> = ({ order, projects }) => {
  const timeout = 400;

  return (
    <ul className='filter__projects'>
      {order.map((id) => (
        <CSSTransition
          key={id}
          in={projects[id].in}
          classNames='filter__project'
          timeout={timeout}
          unmountOnExit={true}
        >
          <Project data={projects[id]} list={order} />
        </CSSTransition>
      ))}
    </ul>
  );
};

export default Projects;
