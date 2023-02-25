import React, { FC, MouseEventHandler } from 'react';
import { addCustomNotification } from '../../helpers/functions';
import { useActions, useAppSelector } from '../../store/hooks';
import Button from '../Button';

interface OwnProps {}

type Props = OwnProps;

const Controls: FC<Props> = () => {
  const { go_to_next } = useActions();

  const { fields, active_field } = useAppSelector(({ form }) => form);

  const { next, is_error } = fields[active_field];

  const isErrorNull = is_error === null;
  const isNextActive = !!(!isErrorNull && !is_error && next);
  const isSubmitActive = !Object.values(fields).find(
    ({ is_error }) => is_error || is_error === null
  );

  const onNextClick: MouseEventHandler<HTMLButtonElement> = () => go_to_next();

  const onSubmitClick: MouseEventHandler<HTMLButtonElement> = () => {
    createSubmitNotification();
  };

  return (
    <div className='form__controls'>
      <Button color='green' isActive={isNextActive} onClickAction={onNextClick}>
        next
      </Button>
      <Button color='green' isActive={isSubmitActive} onClickAction={onSubmitClick}>
        submit your message
      </Button>
    </div>
  );
};

export default Controls;

const createSubmitNotification = () => {
  addCustomNotification({
    title: 'Successful sumbit',
    message: 'Your message has been sent.',
    type: 'success',
    id: '4',
  });
};
