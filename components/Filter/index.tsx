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
  id: string;
  name: string;
  tags: TagType[];
  in: boolean;
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
  },
  '2': {
    id: '2',
    name: 'test2',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
  },
  '3': {
    id: '3',
    name: 'test3',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
  },
  '4': {
    id: '4',
    name: 'test4',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
  },
  '5': {
    id: '5',
    name: 'test5',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
  },
  '6': {
    id: '6',
    name: 'test6',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
  },
  '7': {
    id: '7',
    name: 'test1',
    tags: ['back-end', 'coffeescript'],
    in: true,
  },
  '8': {
    id: '8',
    name: 'test2',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
  },
  '9': {
    id: '9',
    name: 'test3',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
  },
  '10': {
    id: '10',
    name: 'test4',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
  },
  '11': {
    id: '11',
    name: 'test5',
    tags: ['mongodb', 'mongodb', 'back-end'],
    in: true,
  },
  '12': {
    id: '12',
    name: 'test6',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
  },
  '13': {
    id: '13',
    name: 'test6',
    tags: ['backbonejs', 'sass', 'back-end'],
    in: true,
  },
  '14': {
    id: '14',
    name: 'test3',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
  },
  '15': {
    id: '15',
    name: 'test4',
    tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
    in: true,
  },
  '16': {
    id: '16',
    name: 'test2',
    tags: ['backbonejs', 'electron', 'front-end'],
    in: true,
  },
  '17': {
    id: '17',
    name: 'test3',
    tags: ['game design', 'electron', 'front-end'],
    in: true,
  },
};

const Filter: FC<Props> = (props) => {
  const [by, setBy] = useState<TagType>('show all');

  const filterArr = (by: TagType) => {
    const keys = Object.keys(projects);

    if (by === 'show all') return keys;
    // return projects.filter(({ tags }) => tags.includes(by));
    return keys.filter((key) => projects[key].tags.includes(by));
  };

  const clickTagCreator: (value: TagType) => MouseEventHandler<HTMLLIElement> =
    (value) => (e) => {
      setBy(value);
    };

  const [projects, setProjects] = useState<ProjectsInt>(value);

  const [filteredProjects, setFilteredProjects] = useState<string[]>(filterArr(by));
  const [order, setOrder] = useState<string[]>(filterArr(by));

  const test = (by: TagType) => {
    let newF = filterArr(by);

    let oldF = [...filteredProjects];

    // console.log({ newF, oldF });

    for (let i = 0; i < oldF.length; ++i) {
      const el = oldF[i];

      const included = newF.includes(el); // included in newF

      if (included) {
        oldF[i] = newF[0];
        newF.splice(0, 1);
      } else {
        continue;
      }
    }

    const order = [...oldF, ...newF];

    const keys = Object.keys(projects);

    const rest = keys.filter((key) => !order.includes(key));

    return [...order, ...rest];
  };

  useEffect(() => {
    test(by);

    setFilteredProjects(filterArr(by));
    setOrder(test(by));
  }, [by]);

  console.log({ order });

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
      <Projects projects={projects} filteredProjects={filteredProjects} order={order} />
    </div>
  );
};

export default Filter;

const arr = [1, 2, 3, 4, 5, 6];

const arr2 = [2, 3, 5];

const arr3 = [1, 2, 5, 6];

arr.sort((a, b) => {
  // console.log(arr, a, b);;

  return 0;
});

// [1, 3, 2, 5, 6, 4]

/* 

[
    {
      id: 1,
      name: 'test1',
      tags: ['back-end', 'coffeescript'],
      in: true,
    },
    {
      id: 2,
      name: 'test2',
      tags: ['backbonejs', 'electron', 'front-end'],
      in: true,
    },
    {
      id: 3,
      name: 'test3',
      tags: ['game design', 'electron', 'front-end'],
      in: true,
    },
    {
      id: 4,
      name: 'test4',
      tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
      in: true,
    },
    {
      id: 5,
      name: 'test5',
      tags: ['mongodb', 'mongodb', 'back-end'],
      in: true,
    },
    {
      id: 6,
      name: 'test6',
      tags: ['backbonejs', 'sass', 'back-end'],
      in: true,
    },
    {
      id: 7,
      name: 'test1',
      tags: ['back-end', 'coffeescript'],
      in: true,
    },
    {
      id: 8,
      name: 'test2',
      tags: ['backbonejs', 'electron', 'front-end'],
      in: true,
    },
    {
      id: 9,
      name: 'test3',
      tags: ['game design', 'electron', 'front-end'],
      in: true,
    },
    {
      id: 10,
      name: 'test4',
      tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
      in: true,
    },
    {
      id: 11,
      name: 'test5',
      tags: ['mongodb', 'mongodb', 'back-end'],
      in: true,
    },
    {
      id: 12,
      name: 'test6',
      tags: ['backbonejs', 'sass', 'back-end'],
      in: true,
    },
    {
      id: 13,
      name: 'test6',
      tags: ['backbonejs', 'sass', 'back-end'],
      in: true,
    },
    {
      id: 14,
      name: 'test3',
      tags: ['game design', 'electron', 'front-end'],
      in: true,
    },
    {
      id: 15,
      name: 'test4',
      tags: ['ui/ux design', 'sass', 'front-end', 'back-end'],
      in: true,
    },
    {
      id: 16,
      name: 'test2',
      tags: ['backbonejs', 'electron', 'front-end'],
      in: true,
    },
    {
      id: 17,
      name: 'test3',
      tags: ['game design', 'electron', 'front-end'],
      in: true,
    },
  ]

*/
