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
      tags: ['backbonejs', 'electron', 'front-end'],
    },
    {
      id: 3,
      name: 'test3',
      tags: ['game design', 'electron', 'front-end'],
    },
    {
      id: 4,
      name: 'test4',
      tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    },
    {
      id: 5,
      name: 'test5',
      tags: ['mongodb', 'mongodb', 'back-end'],
    },
    {
      id: 6,
      name: 'test6',
      tags: ['backbonejs', 'sass', 'back-end'],
    },
    {
      id: 7,
      name: 'test1',
      tags: ['back-end', 'coffeescript'],
    },
    {
      id: 8,
      name: 'test2',
      tags: ['backbonejs', 'electron', 'front-end'],
    },
    {
      id: 9,
      name: 'test3',
      tags: ['game design', 'electron', 'front-end'],
    },
    {
      id: 10,
      name: 'test4',
      tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    },
    {
      id: 11,
      name: 'test5',
      tags: ['mongodb', 'mongodb', 'back-end'],
    },
    {
      id: 12,
      name: 'test6',
      tags: ['backbonejs', 'sass', 'back-end'],
    },
    {
      id: 13,
      name: 'test6',
      tags: ['backbonejs', 'sass', 'back-end'],
    },
    {
      id: 14,
      name: 'test3',
      tags: ['game design', 'electron', 'front-end'],
    },
    {
      id: 15,
      name: 'test4',
      tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    },
    {
      id: 16,
      name: 'test2',
      tags: ['backbonejs', 'electron', 'front-end'],
    },
    {
      id: 17,
      name: 'test3',
      tags: ['game design', 'electron', 'front-end'],
    },
  ]);

  const [filteredProjects, setFilteredProjects] = useState<ProjectsType>(filterArr(by));

  useEffect(() => {
    setFilteredProjects(filterArr(by));
  }, [by]);

  console.log(filteredProjects);

  // console.log({ by, filteredProjects });

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
      <Projects projects={projects} filteredProjects={filteredProjects} />
    </div>
  );
};

export default Filter;
