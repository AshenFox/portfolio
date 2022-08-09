import React, { FC, MouseEventHandler } from 'react';
import Button from '../Button';

interface OwnProps {
  isNextActive: boolean;
  onNextClick: MouseEventHandler<HTMLButtonElement>;
  isSubmitActive: boolean;
  onSubmitClick: MouseEventHandler<HTMLButtonElement>;
}

type Props = OwnProps;

const Controls: FC<Props> = ({
  isNextActive,
  onNextClick,
  isSubmitActive,
  onSubmitClick,
}) => {
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
