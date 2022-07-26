import React from 'react';

const FancyLink = ({ children }) => {
  return (
    <span className='fancy-link'>
      <span className='fancy-link__text'>{children}</span>
    </span>
  );
};

export default FancyLink;
