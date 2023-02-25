import React, { FC, ReactNode } from 'react';
import Icons from './Icons';
import { TIcon } from './types';

type InteractiveElementInnerProps = {
  icon?: TIcon;
  children?: ReactNode;
};

const InteractiveElementInner: FC<InteractiveElementInnerProps> = ({
  icon,
  children,
}) => {
  const Icon = Icons[icon];

  return (
    <>
      <div className='interactive-element__left'></div>
      <div className='interactive-element__middle'></div>
      <div className='interactive-element__right'></div>
      <div className='interactive-element__content'>
        {icon && <Icon />}
        {children && <span className='interactive-element__text'>{children}</span>}
      </div>
      <div className='interactive-element__background'></div>
      <div className='interactive-element__shadow'></div>
    </>
  );
};

export default InteractiveElementInner;
