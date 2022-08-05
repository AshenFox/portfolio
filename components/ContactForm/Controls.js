import React from 'react';
import Button from '../Button';

const Controls = ({ isNextActive, onNextClick, isSubmitActive, onSubmitClick }) => {
  return (
    <div className='form__controls'>
      <Button color='green' isActive={isNextActive} onClick={onNextClick}>
        next
      </Button>
      <Button color='green' isActive={isSubmitActive} onClick={onSubmitClick}>
        submit your message
      </Button>
    </div>
  );
};

export default Controls;
