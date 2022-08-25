import React, { FC } from 'react';
import { ProjectsType } from '..';
import Project from './Project';

interface OwnProps {
  data: ProjectsType;
}

type Props = OwnProps;

const Projects: FC<Props> = ({ data }) => {
  return (
    <ul className='filter__projects'>
      {data.map((project) => (
        <Project data={project} />
      ))}
    </ul>
  );
};

export default Projects;
