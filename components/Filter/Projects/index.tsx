import React, { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProjectsInt } from '..';
import Project from './Project';

interface OwnProps {
  // data: ProjectsType;projects
  projects: ProjectsInt;
  filteredProjects: string[];
  order: string[];
}

type Props = OwnProps;

const Projects: FC<Props> = ({ projects, filteredProjects, order }) => {
  return (
    <ul className='filter__projects'>
      {/* <TransitionGroup component={null}>
        {filteredProjects.map((project) => (
          <CSSTransition
            key={project.id}
            classNames='filter__project'
            timeout={400000}
            unmountOnExit={true}
          >
            <Project data={project} list={filteredProjects} />
          </CSSTransition>
        ))}
      </TransitionGroup> */}

      {/* {projects.map((project) => (
        <CSSTransition
          key={project.id}
          in={!!filteredProjects.find((el) => el.id === project.id)}
          classNames='filter__project'
          timeout={400}
          unmountOnExit={true}
        >
          <Project data={project} list={filteredProjects} />
        </CSSTransition>
      ))} */}

      {/* {Object.values(projects).map((project) => (
        <CSSTransition
          key={project.id}
          in={filteredProjects.includes(project.id)}
          classNames='filter__project'
          timeout={400}
          unmountOnExit={true}
        >
          <Project data={project} list={filteredProjects} />
        </CSSTransition>
      ))} */}

      {order.map((id) => (
        <CSSTransition
          key={id}
          in={filteredProjects.includes(id)}
          classNames='filter__project'
          timeout={400}
          unmountOnExit={true}
        >
          <Project data={projects[id]} list={filteredProjects} />
        </CSSTransition>
      ))}
    </ul>
  );
};

export default Projects;
