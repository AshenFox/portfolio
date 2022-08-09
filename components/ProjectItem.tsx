import Link from 'next/link';
import React, { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const ProjectItem: FC<Props> = () => {
  return (
    <li className='portfolio__project-item'>
      <Link href={'/'}>
        <a className='portfolio__project-item-container' title='/'>
          <div className='portfolio__project-item-bar'>
            <h2>flashcards</h2>
          </div>
          <div className='portfolio__project-item-main'>
            <img src='/6.jpg' alt='' className='portfolio__project-item-img-main' />
            <div className='portfolio__project-item-hover'>
              <div className='portfolio__project-item-img-hover'>
                <img src='/7.jpg' alt='' />
              </div>

              <ul className='portfolio__project-item-tags'>
                <li className='portfolio__project-item-tag'>back-end</li>
                <li className='portfolio__project-item-tag'>front-end</li>
                <li className='portfolio__project-item-tag'>html5</li>
                <li className='portfolio__project-item-tag'>sass</li>
              </ul>

              <span className='portfolio__project-item-more'>more...</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default ProjectItem;
