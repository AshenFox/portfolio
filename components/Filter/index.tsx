import React, { FC, MouseEventHandler, useCallback, useEffect, useState } from 'react';
import Projects from './Projects';
import Tag from './Tag';

export type TagType =
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
  id: string;
  name: string;
  tags: TagType[];
  in: boolean;
  thumbnails: {
    main: string;
    hover: string;
  };
}

// export type ProjectsType = ProjectInt[];

export interface ProjectsInt {
  [key: string]: ProjectInt;
}

interface OwnProps {}

type Props = OwnProps;

const value: ProjectsInt = {
  '1': {
    id: '1',
    name: 'test1',
    tags: ['back-end', 'coffeescript'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '2': {
    id: '2',
    name: 'test2',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '3': {
    id: '3',
    name: 'test3',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '4': {
    id: '4',
    name: 'test4',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '5': {
    id: '5',
    name: 'test5',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '6': {
    id: '6',
    name: 'test6',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '7': {
    id: '7',
    name: 'test7',
    tags: ['back-end', 'coffeescript'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '8': {
    id: '8',
    name: 'test8',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '9': {
    id: '9',
    name: 'test9',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '10': {
    id: '10',
    name: 'test10',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '11': {
    id: '11',
    name: 'test11',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '12': {
    id: '12',
    name: 'test12',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '13': {
    id: '13',
    name: 'test13',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '14': {
    id: '14',
    name: 'test14',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '15': {
    id: '15',
    name: 'test15',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
  '16': {
    id: '16',
    name: 'test16',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/6.jpg',
      hover: '/7.jpg',
    },
  },
  '17': {
    id: '17',
    name: 'test17',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
    thumbnails: {
      main: '/3.jpg',
      hover: '/4.jpg',
    },
  },
};

const Filter: FC<Props> = props => {
  const [by, setBy] = useState<TagType>('show all');

  const clickTagCreator: (value: TagType) => MouseEventHandler<HTMLLIElement> =
    value => e => {
      setBy(value);
    };

  const [projects, setProjects] = useState<ProjectsInt>(value);

  const [order, setOrder] = useState<string[]>(Object.keys(projects));

  const filterProjects = (by: TagType) => {
    const res: {
      filtered: string[];
      inArr: string[];
      projects: ProjectsInt;
    } = Object.entries(projects).reduce(
      (res, [id, project], i, arr) => {
        const prevIn = project.in;
        const newIn = isAll || project.tags.includes(by);
        const newProject = {
          ...project,
          in: newIn,
        };

        res.projects[id] = newProject;

        if (newIn) {
          res.inArr.push(id);
          if (prevIn) res.filtered = [...res.filtered, ...res.inArr.splice(0, 1)];
        } else {
          res.filtered.push(id);
        }

        if (arr.length === i + 1) res.filtered = [...res.filtered, ...res.inArr];

        return res;
      },
      { filtered: [], inArr: [], projects: {} }
    );

    setOrder(res.filtered);
    setProjects(res.projects);
  };

  useEffect(() => {
    filterProjects(by);
  }, [by]);

  const isAll = by === 'show all';

  return (
    <div className='filter'>
      <ul className='filter__tags'>
        {tagList.map(value => {
          const onClick = clickTagCreator(value);

          return (
            <Tag key={value} active={value === by} onClick={onClick}>
              {value}
            </Tag>
          );
        })}
      </ul>
      <small className='filter__info'>
        Showing {isAll ? 'all' : by} projects. Use the filter to list them by skill or
        technology.
      </small>
      <Projects order={order} projects={projects} />
    </div>
  );
};

export default Filter;
