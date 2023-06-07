import React, { FC, MouseEventHandler, useCallback, useRef, useState } from 'react';
import { addCustomNotification } from '@helpers/functions';
import { useActions, useAppSelector } from '@store/hooks';
import { Button } from '@ui/InteractiveElement';
import styles from './styles.module.scss';
import { Language } from '@store/reducers/language/languageInitState';
import content from './content';

const Controls: FC = () => {
  const { go_to_next } = useActions();

  const [isSending, setIsSending] = useState(false);

  const { fields, active_field } = useAppSelector(({ form }) => form);

  const language = useAppSelector(({ language }) => language.language);

  const { next, is_error } = fields[active_field];

  const isErrorNull = is_error === null;
  const isNextActive = !!(!isErrorNull && !is_error && next);
  const isSubmitActive = !Object.values(fields).find(
    ({ is_error }) => is_error || is_error === null
  );

  const onNextClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    () => go_to_next(),
    [go_to_next]
  );

  const onSubmitClick: MouseEventHandler<HTMLButtonElement> = useCallback(async () => {
    if (isSending) return;

    try {
      setIsSending(true);

      const { name, email, message } = fields;

      const res = await fetch('https://formsubmit.co/ajax/kavokinm@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Portfolio Connection from ${name.value}`,
          name: name.value,
          replyto: email.value,
          message: message.value,
        }),
      });

      if (res.ok) {
        createSuccessNotification(language);
      }
    } catch (e) {
      console.info(e);
      createErrorNotification(language);
    }

    setIsSending(false);
  }, [fields, language, isSending]);

  return (
    <div className={styles.controls}>
      <Button color='green' isActive={isNextActive} onClickAction={onNextClick}>
        {content[language].next}
      </Button>
      <Button
        color='green'
        isActive={isSubmitActive && !isSending}
        onClickAction={onSubmitClick}
      >
        {content[language].submit}
      </Button>
    </div>
  );
};

export default Controls;

const createSuccessNotification = (language: Language) => {
  addCustomNotification({
    ...content[language].submitNotification.success,
    type: 'success',
    id: '4',
  });
};

const createErrorNotification = (language: Language) => {
  addCustomNotification({
    ...content[language].submitNotification.error,
    type: 'danger',
    id: '5',
  });
};
