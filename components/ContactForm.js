import React from 'react';
import Icons from '../components/icons';
import Button from '../components/Button';
import { useEffect, useRef, useState } from 'react';

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
    },
    email: {
      placeholder: 'Your email address',
      iconName: 'mail',
      next: 'message',
      value: '',
      transitioned: false,
    },
    message: {
      placeholder: 'Write your message :)',
      iconName: 'pentosquare',
      next: null,
      value: '',
      transitioned: false,
    },
  });

  const [activeField, setActiveField] = useState('name');

  const { iconName, placeholder, next, transitioned } = fields[activeField];
  const IconEl = Icons[iconName];

  const setElHeight = (el) => {
    el.style.height = `0px`;
    el.style.height = `${el.scrollHeight}px`;
  };

  const onChange = (e) => {
    const { target } = e;

    setTextAreaValue(target.value);
    setActiveFieldValue(target.value);
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
      goToNext();
    }
  };

  return (
    <form action='' className='contact-page__form' onSubmit={undefined}>
      <ul className='contact-page__info'>
        {Object.entries(fields).map(
          ([name, { placeholder, value, iconName, transitioned }]) => {
            const Icon = Icons[iconName];
            const isActive = activeField === name;
            const isNotPlaceholder = (textareaValue && isActive) || transitioned;

            return (
              <li
                className={`contact-page__info-item ${name} ${
                  isNotPlaceholder ? '' : 'placeholder'
                } ${value ? 'transitioned' : ''} ${isActive ? 'active' : ''}`}
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

      <div className={`contact-page__textarea ${transitioned ? '' : 'placeholder'}`}>
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
        <Button color='green' isActive={!!textareaValue && next} onClick={goToNext}>
          next
        </Button>
        <Button color='green' isActive={activeField === 'message' && textareaValue}>
          submit your message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
