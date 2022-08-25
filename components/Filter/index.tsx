import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import Projects from './Projects';
import Tag from './Tag';

type TagType =
  | 'show all'
  | 'front-end'
  | 'back-end'
  | 'html5'
  | 'sass'
  | 'less'
  | 'javascript'
  | 'nodejs'
  | 'electron'
  | 'reactjs'
  | 'meteor'
  | 'coffeescript'
  | 'mongodb'
  | 'mysql'
  | 'backbonejs'
  | 'ui/ux design'
  | 'animations'
  | 'game design';

const tagList: TagType[] = [
  'show all',
  'front-end',
  'back-end',
  'html5',
  'sass',
  'less',
  'javascript',
  'nodejs',
  'electron',
  'reactjs',
  'meteor',
  'coffeescript',
  'mongodb',
  'mysql',
  'backbonejs',
  'ui/ux design',
  'animations',
  'game design',
];

export interface ProjectInt {
  id: number;
  name: string;
  tags: TagType[];
}

export type ProjectsType = ProjectInt[];

interface OwnProps {}

type Props = OwnProps;

const Filter: FC<Props> = (props) => {
  const [by, setBy] = useState<TagType>('show all');

  const filterArr = (by: TagType) => {
    if (by === 'show all') return projects;
    return projects.filter(({ tags }) => tags.includes(by));
  };

  const clickTagCreator: (value: TagType) => MouseEventHandler<HTMLLIElement> =
    (value) => (e) => {
      setBy(value);
    };

  const [projects, setProjects] = useState<ProjectsType>([
    {
      id: 1,
      name: 'test1',
      tags: ['back-end', 'coffeescript'],
    },
    {
      id: 2,
      name: 'test2',
      tags: ['backbonejs', 'electron'],
    },
    {
      id: 3,
      name: 'test3',
      tags: ['game design', 'electron'],
    },
    {
      id: 4,
      name: 'test4',
      tags: ['ui/ux design', 'sass'],
    },
    {
      id: 5,
      name: 'test5',
      tags: ['mongodb', 'mongodb'],
    },
    {
      id: 6,
      name: 'test6',
      tags: ['backbonejs', 'sass'],
    },
  ]);

  const [filteredProjects, setFilteredProjects] = useState<ProjectsType>(filterArr(by));

  useEffect(() => {
    setFilteredProjects(filterArr(by));
  }, [by]);

  console.log({ by, filteredProjects });

  return (
    <div className='filter'>
      <ul className='filter__tags'>
        {tagList.map((value) => {
          const onClick = clickTagCreator(value);

          return (
            <Tag key={value} active={value === by} onClick={onClick}>
              {value}
            </Tag>
          );
        })}
      </ul>
      <small className='filter__info'>
        Showing all projects. Use the filter to list them by skill or technology.
      </small>
      <Projects data={filteredProjects} />
    </div>
  );
};

export default Filter;
