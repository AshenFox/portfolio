import React from 'react';

const Tag = ({ children, active }) => {
  return (
    <li className={`portfolio__tag ${active ? 'portfolio__tag--active' : ''}`}>
      <span>{children}</span>
    </li>
  );
};

export default Tag;
