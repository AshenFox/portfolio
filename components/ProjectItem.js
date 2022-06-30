import Link from 'next/link';
import React from 'react';

const ProjectItem = () => {
  return (
    <li className='portfolio__project-item'>
      <Link href={'/'}>
        <a className='portfolio__project-item-container' href='/'>
          <div className='portfolio__project-item-bar'>
            <h2>sky go desktop</h2>
          </div>
          <div className='portfolio__project-item-main'>
            <img src='/1.jpg' alt='' className='portfolio__project-item-img' />
          </div>
        </a>
      </Link>
    </li>
  );
};

export default ProjectItem;
