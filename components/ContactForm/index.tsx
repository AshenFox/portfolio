import React, {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  KeyboardEventHandler,
} from 'react';
import Icons from '../Icons';
import { useEffect, useRef, useState } from 'react';
import { iNotification, Store } from 'react-notifications-component';
import Controls from './Controls';
import Textarea from './Textarea';
import Info from './Info';
import { useActions, useAppSelector } from '../../store/hooks';
import { Error, FieldName } from '../../store/reducers/form/contactFormInitState';

interface Timer {
  timer: ReturnType<typeof setTimeout>;
}

interface Timers {
  [key: string]: Timer;
}

interface OwnProps {}

type Props = OwnProps;

const ContactForm: FC<Props> = () => {
  const {
    set_textarea_value,
    set_active_field,
    set_active_field_value,
    set_active_field_transitioned,
    set_active_field_iserror,
  } = useActions();

  const { fields, textarea_value, active_field } = useAppSelector(({ form }) => form);

  const timersRef = useRef<Timers>(
    Object.keys(fields).reduce(
      (timers, key) => ({
        ...timers,
        [key]: {
          timer: null,
        },
      }),
      {}
    )
  );

  const { icon_name, next, transitioned, is_error, errors, errorID, value } =
    fields[active_field];
  const IconEl: FC = Icons[icon_name];

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const {
      target: { value },
    } = e;

    set_textarea_value(value);
    set_active_field_value(value);

    clearTimeout(timersRef.current[active_field].timer);
    timersRef.current[active_field].timer = setTimeout(() => {
      const error: Error = errors.find((error: Error) => error.test(value));

      if (error) {
        createErrorNotification(errorID, error);
      } else {
        removeNotification(errorID);
      }

      set_active_field_iserror(!!error); // Add thunk to assecc a previous state
    }, 250);
  };

  const goToNext = () => {
    if (next) {
      set_active_field_value(textarea_value);
      set_active_field(next);
      set_textarea_value('');
    }
  };

  const changeActiveField = (field: FieldName) => () => {
    if (field !== active_field) {
      set_active_field_value(textarea_value);
      set_active_field(field);
      set_textarea_value(fields[field].value);
    }
  };

  useEffect(() => {
    if (textarea_value && !transitioned) {
      set_active_field_transitioned(true);
    }
  }, [textarea_value]);

  const onEnter: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (next && e.key === 'Enter') {
      e.preventDefault();

      if (isNextActive) goToNext();
    }
  };

  const isErrorNull = is_error === null;
  const isNextActive = !!(!isErrorNull && !is_error && next);
  const isSubmitActive = !Object.values(fields).find(
    ({ is_error }) => is_error || is_error === null
  );

  return (
    <form action='' className='form' onSubmit={undefined}>
      <Info
        activeField={active_field}
        fields={fields}
        textareaValue={textarea_value}
        onItemClickCreator={changeActiveField}
      />
      <Textarea
        isError={is_error}
        transitioned={transitioned}
        name={active_field}
        onChange={onChange}
        onKeyDown={onEnter}
        value={textarea_value}
      >
        <IconEl />
      </Textarea>
      <Controls
        isNextActive={isNextActive}
        onNextClick={goToNext}
        isSubmitActive={isSubmitActive}
        onSubmitClick={createSubmitNotification}
      />
    </form>
  );
};

export default ContactForm;

const addCustomNotification = (custom_options: Partial<iNotification>) => {
  Store.addNotification({
    ...custom_options,
    insert: 'top',
    animationIn: ['notification__fadeIn'],
    animationOut: ['notification__fadeOut'],
    dismiss: {
      duration: 5000,
      waitForAnimation: true,
    },
    container: 'top-center',
  });
};

const createErrorNotification = (id: string, error: Error) => {
  const { title, message } = error;

  addCustomNotification({
    title: title,
    message: message,
    type: 'danger',
    id,
  });
};

const createSubmitNotification = () => {
  addCustomNotification({
    title: 'Successful sumbit',
    message: 'Your message has been sent.',
    type: 'success',
    id: '4',
  });
};

const removeNotification = (id: string) => Store.removeNotification(id);

/* 
STATE

fields
active_field
textarea_value


*/
