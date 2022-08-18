import React, {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  useEffect,
  useRef,
} from 'react';
import { addCustomNotification, removeNotification } from '../../helpers/functions';
import { useActions, useAppSelector } from '../../store/hooks';
import { Error } from '../../store/reducers/form/contactFormInitState';
import Icons from '../Icons';

interface Timer {
  timer: ReturnType<typeof setTimeout>;
}

interface Timers {
  [key: string]: Timer;
}

interface OwnProps {}

type Props = OwnProps;

const Textarea: FC<Props> = () => {
  const {
    set_textarea_value,
    set_active_field_value,
    set_active_field_iserror,
    go_to_next,
  } = useActions();

  const { fields, textarea_value, active_field } = useAppSelector(({ form }) => form);

  const { icon_name, next, transitioned, is_error, errors, errorID } =
    fields[active_field];
  const IconEl: FC = Icons[icon_name];

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

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const setElHeight = (el: HTMLTextAreaElement) => {
    el.style.height = `0px`;
    el.style.height = `${el.scrollHeight}px`;
  };

  const checkErrors = (value: string) => {
    clearTimeout(timersRef.current[active_field].timer);
    timersRef.current[active_field].timer = setTimeout(() => {
      const error: Error = errors.find((error: Error) => error.test(value));

      if (error) {
        createErrorNotification(errorID, error);
      } else {
        removeNotification(errorID);
      }

      set_active_field_iserror(!!error); // Add thunk to assess a previous state
    }, 100);
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const {
      target: { value },
    } = e;

    set_textarea_value(value);
    set_active_field_value(value);

    checkErrors(value);
  };

  const onEnter: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (next && e.key === 'Enter') {
      e.preventDefault();

      if (isNextActive) go_to_next();
    }
  };

  useEffect(() => {
    setElHeight(textareaRef.current);
  }, [textarea_value]);

  const isErrorNull = is_error === null;
  const isNextActive = !!(!isErrorNull && !is_error && next);

  return (
    <div
      className={`form__textarea ${isErrorNull ? '' : is_error ? 'error' : 'valid'} ${
        transitioned ? '' : 'placeholder'
      }`}
    >
      <IconEl />
      <textarea
        name={active_field}
        rows={1}
        onChange={onChange}
        onKeyDown={onEnter}
        value={textarea_value}
        ref={textareaRef}
      ></textarea>
    </div>
  );
};

export default Textarea;

const createErrorNotification = (id: string, error: Error) => {
  const { title, message } = error;

  addCustomNotification({
    title: title,
    message: message,
    type: 'danger',
    id,
  });
};
