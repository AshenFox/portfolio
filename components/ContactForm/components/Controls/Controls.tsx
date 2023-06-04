import React, { FC, MouseEventHandler } from 'react';
import { addCustomNotification } from '../../../../helpers/functions';
import { useActions, useAppSelector } from '../../../../store/hooks';
import { Button } from '@ui/InteractiveElement';
import styles from './styles.module.scss';
import { Language } from 'store/reducers/language/languageInitState';
import content from './content';

interface OwnProps {}

type Props = OwnProps;

const Controls: FC<Props> = () => {
  const { go_to_next } = useActions();

  const { fields, active_field } = useAppSelector(({ form }) => form);

  const language = useAppSelector(({ language }) => language.language);

  const { next, is_error } = fields[active_field];

  const isErrorNull = is_error === null;
  const isNextActive = !!(!isErrorNull && !is_error && next);
  const isSubmitActive = !Object.values(fields).find(
    ({ is_error }) => is_error || is_error === null
  );

  const onNextClick: MouseEventHandler<HTMLButtonElement> = () => go_to_next();

  const onSubmitClick: MouseEventHandler<HTMLButtonElement> = () => {
    createSubmitNotification(language);
  };

  return (
    <div className={styles.controls}>
      <Button color='green' isActive={isNextActive} onClickAction={onNextClick}>
        {content[language].next}
      </Button>
      <Button color='green' isActive={isSubmitActive} onClickAction={onSubmitClick}>
        {content[language].submit}
      </Button>
    </div>
  );
};

export default Controls;

// add error notification?
const createSubmitNotification = (language: Language) => {
  addCustomNotification({
    ...content[language].submitNotification,
    type: 'success',
    id: '4',
  });
};
