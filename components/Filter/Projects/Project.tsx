import Link from 'next/link';
import React, { FC } from 'react';
import { ProjectInt } from '..';

interface OwnProps {
  data: ProjectInt;
}

type Props = OwnProps;

const Project: FC<Props> = ({ data }) => {
  const { name } = data;

  return (
    <li className='filter__project'>
      <Link href={'/'}>
        <a className='filter__project-container' title='/'>
          <div className='filter__project-bar'>
            <h2>{name}</h2>
          </div>
          <div className='filter__project-main'>
            <img src='/6.jpg' alt='' className='filter__project-img-main' />
            <div className='filter__project-hover'>
              <div className='filter__project-img-hover'>
                <img src='/7.jpg' alt='' />
              </div>

              <ul className='filter__project-tags'>
                <li className='filter__project-tag'>back-end</li>
                <li className='filter__project-tag'>front-end</li>
                <li className='filter__project-tag'>html5</li>
                <li className='filter__project-tag'>sass</li>
              </ul>

              <span className='filter__project-more'>more...</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Project;
