import React, { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import Controls from './Controls';
import Textarea from './Textarea';
import Info from './Info';
import { useActions, useAppSelector } from '../../store/hooks';

interface OwnProps {}

type Props = OwnProps;

const ContactForm: FC<Props> = () => {
  const { set_active_field_transitioned } = useActions();

  const { fields, textarea_value, active_field } = useAppSelector(({ form }) => form);

  const { transitioned } = fields[active_field];

  useEffect(() => {
    if (textarea_value && !transitioned) {
      set_active_field_transitioned(true);
    }
  }, [textarea_value]);

  return (
    <form action='' className='form' onSubmit={undefined}>
      <Info />
      <Textarea />
      <Controls />
    </form>
  );
};

export default ContactForm;
