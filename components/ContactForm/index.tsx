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

const emailTestRegExp =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

interface ErrorCheck {
  title: string;
  message: string;
  test: (value: string) => boolean;
}

type ErrorCheckCreator = (value?: string) => ErrorCheck;

const ErrorChecks = {
  invalidEmail: () => ({
    title: 'Ivalid email',
    message: "The email you've inputted is ivalid.",
    test: (value: string) => !emailTestRegExp.test(value),
  }),
  shortMessage: () => ({
    title: 'Short message',
    message: 'Your message has to contain at least 5 characters.',
    test: (value: string) => value.length < 5,
  }),
  emptyField: (fieldName = 'placeholder') => ({
    title: `Empty ${fieldName} field`,
    message: `You can't leave ${fieldName} field empty.`,
    test: (value: string) => !value,
  }),
};

const { invalidEmail, shortMessage, emptyField } = ErrorChecks;

export interface Field {
  placeholder: string;
  iconName: string;
  next: string;
  value: string;
  transitioned: boolean;
  errorTypes: ErrorCheck[];
  isError: boolean;
  errorID: string;
}

export interface Fields {
  [key: string]: Field;
}

interface Timer {
  timer: ReturnType<typeof setTimeout>;
}

interface Timers {
  [key: string]: Timer;
}

interface OwnProps {}

type Props = OwnProps;

const ContactForm: FC<Props> = () => {
  const [textareaValue, setTextAreaValue] = useState('');

  const [fields, setFields] = useState<Fields>({
    name: {
      placeholder: 'Fill with your name',
      iconName: 'person',
      next: 'email',
      value: '',
      transitioned: false,
      errorTypes: [emptyField('name')],
      isError: null,
      errorID: '1',
    },
    email: {
      placeholder: 'Your email address',
      iconName: 'mail',
      next: 'message',
      value: '',
      transitioned: false,
      errorTypes: [emptyField('email'), invalidEmail()],
      isError: null,
      errorID: '2',
    },
    message: {
      placeholder: 'Write your message :)',
      iconName: 'pentosquare',
      next: null,
      value: '',
      transitioned: false,
      errorTypes: [emptyField('message'), shortMessage()],
      isError: null,
      errorID: '3',
    },
  });

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

  const [activeField, setActiveField] = useState('name');

  const { iconName, next, transitioned, isError, errorTypes, errorID, value } =
    fields[activeField];
  const IconEl: FC = Icons[iconName];

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const {
      target: { value },
    } = e;

    setTextAreaValue(value);
    setActiveFieldValue(value);

    clearTimeout(timersRef.current[activeField].timer);
    timersRef.current[activeField].timer = setTimeout(() => {
      const error = errorTypes.find((error) => error.test(value));

      if (error) {
        createErrorNotification(errorID, error);
      } else {
        removeNotification(errorID);
      }

      setFields((fieldsPrev) => ({
        ...fieldsPrev,
        [activeField]: {
          ...fieldsPrev[activeField],
          isError: !!error,
        },
      }));
    }, 250);
  };

  const setActiveFieldValue = (value: string) => {
    setFields({
      ...fields,
      [activeField]: {
        ...fields[activeField],
        value,
      },
    });
  };

  const goToNext = () => {
    if (next) {
      setActiveFieldValue(textareaValue);
      setActiveField(next);
      setTextAreaValue('');
    }
  };

  const changeActiveField = (field: string) => () => {
    if (field !== activeField) {
      setActiveFieldValue(textareaValue);
      setActiveField(field);
      setTextAreaValue(fields[field].value);
    }
  };

  useEffect(() => {
    if (textareaValue && !transitioned) {
      setFields({
        ...fields,
        [activeField]: {
          ...fields[activeField],
          transitioned: true,
        },
      });
    }
  }, [textareaValue]);

  const onEnter: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (next && e.key === 'Enter') {
      e.preventDefault();

      if (isNextActive) goToNext();
    }
  };

  const isErrorNull = isError === null;
  const isNextActive = !!(!isErrorNull && !isError && next);
  const isSubmitActive = !Object.values(fields).find(
    ({ isError }) => isError || isError === null
  );

  return (
    <form action='' className='form' onSubmit={undefined}>
      <Info
        activeField={activeField}
        fields={fields}
        textareaValue={textareaValue}
        onItemClick={changeActiveField}
      />
      <Textarea
        isError={isError}
        transitioned={transitioned}
        name={activeField}
        onChange={onChange}
        onKeyDown={onEnter}
        value={textareaValue}
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

const createErrorNotification = (id: string, error: ErrorCheck) => {
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
