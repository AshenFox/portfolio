import React from 'react';
import Icons from '../components/icons';
import Button from '../components/Button';
import { useEffect, useRef, useState } from 'react';
import { Store } from 'react-notifications-component';

const emailTestRegExp =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

const ErrorChecks = {
  invalidEmail: {
    title: 'Ivalid email',
    message: "The email you've inputted is ivalid.",
    test: (value) => !emailTestRegExp.test(value),
  },
  shortMessage: {
    title: 'Short message',
    message: 'Your message has to contain at least 5 characters.',
    test: (value) => value.length < 5,
  },
  emptyField: (fieldName) => ({
    title: `Empty ${fieldName} field`,
    message: `You can't leave ${fieldName} field empty.`,
    test: (value) => !value,
  }),
};

const { invalidEmail, shortMessage, emptyField } = ErrorChecks;

const ContactForm = () => {
  const textareaRef = useRef(null);
  const [textareaValue, setTextAreaValue] = useState('');

  const [fields, setFields] = useState({
    name: {
      placeholder: 'Fill with your name',
      iconName: 'person',
      next: 'email',
      value: '',
      transitioned: false,
      errorTypes: [emptyField('name')],
      isError: null,
      errorID: 1,
    },
    email: {
      placeholder: 'Your email address',
      iconName: 'mail',
      next: 'message',
      value: '',
      transitioned: false,
      errorTypes: [emptyField('email'), invalidEmail],
      isError: null,
      errorID: 2,
    },
    message: {
      placeholder: 'Write your message :)',
      iconName: 'pentosquare',
      next: null,
      value: '',
      transitioned: false,
      errorTypes: [emptyField('message'), shortMessage],
      isError: null,
      errorID: 3,
    },
  });

  const timersRef = useRef(
    Object.keys(fields).reduce(
      (timers, key) => ({
        ...timers,
        [key]: {
          timer: false,
        },
      }),
      {}
    )
  );

  const [activeField, setActiveField] = useState('name');

  const { iconName, next, transitioned, isError, errorTypes, errorID, value } =
    fields[activeField];
  const IconEl = Icons[iconName];

  const setElHeight = (el) => {
    el.style.height = `0px`;
    el.style.height = `${el.scrollHeight}px`;
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    setTextAreaValue(value);
    setActiveFieldValue(value);

    clearTimeout(timersRef.current[activeField]);
    timersRef.current[activeField] = setTimeout(() => {
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

  const setActiveFieldValue = (value) => {
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

  const changeActiveField = (field) => () => {
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

    setElHeight(textareaRef.current);
  }, [textareaValue]);

  const onEnter = (e) => {
    if (next && e.key === 'Enter') {
      e.preventDefault();

      if (isNextActive) goToNext();
    }
  };

  const isErrorNull = isError === null;
  const isNextActive = !isErrorNull && !isError && next;
  const isSubmitActive = !Object.values(fields).find(
    ({ isError }) => isError || isError === null
  );

  return (
    <form action='' className='contact-page__form' onSubmit={undefined}>
      <ul className='contact-page__info'>
        {Object.entries(fields).map(
          ([name, { placeholder, value, iconName, transitioned, isError }]) => {
            const Icon = Icons[iconName];
            const isActive = activeField === name;
            const isNotPlaceholder = (textareaValue && isActive) || transitioned;
            const isErrorNull = isError === null;

            return (
              <li
                className={`contact-page__info-item ${name} ${
                  isNotPlaceholder ? '' : 'placeholder'
                } ${value ? 'transitioned' : ''} ${isActive ? 'active' : ''} ${
                  isErrorNull ? '' : isError ? 'error' : 'valid'
                }`}
                key={name}
                onClick={changeActiveField(name)}
              >
                <Icon />
                <span>{value ? value : placeholder}</span>
              </li>
            );
          }
        )}
      </ul>

      <div
        className={`contact-page__textarea ${
          isErrorNull ? '' : isError ? 'error' : 'valid'
        } ${transitioned ? '' : 'placeholder'}`}
      >
        <IconEl />
        <textarea
          name={activeField}
          rows='1'
          onChange={onChange}
          onKeyDown={onEnter}
          value={textareaValue}
          ref={textareaRef}
        ></textarea>
      </div>

      <div className='contact-page__form-contorls'>
        <Button color='green' isActive={isNextActive} onClick={goToNext}>
          next
        </Button>
        <Button
          color='green'
          isActive={isSubmitActive}
          onClick={createSubmitNotification}
        >
          submit your message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

const addCustomNotification = (custom_options) => {
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

const createErrorNotification = (id, error) => {
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
    id: 4,
  });
};

const removeNotification = (id) => Store.removeNotification(id);
