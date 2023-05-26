import React, { FC, FormEventHandler, useCallback } from 'react';
import { useEffect, useRef, useState } from 'react';
import Controls from './components/Controls/Controls';
import Textarea from './components/Textarea';
import Info from './components/Info';
import { useActions, useAppSelector } from '../../store/hooks';
import styles from './styles.module.scss';

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
  }, [textarea_value, set_active_field_transitioned, transitioned]);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <form action='' className={styles.form} onSubmit={onSubmit}>
      <Info />
      <Textarea />
      <Controls />
    </form>
  );
};

export default ContactForm;
