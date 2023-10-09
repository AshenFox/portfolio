import React, { FC, MouseEventHandler, memo } from 'react';
import { useActions, useAppSelector } from '@store/hooks';
import { Field, FieldName } from '@store/reducers/form/contactFormInitState';
import InfoItem from './components/InfoItem';
import styles from './styles.module.scss';
import content from './content';

const Info: FC = () => {
  const language = useAppSelector(({ language }) => language.language);

  const { change_active_field } = useActions();

  const { fields, textarea_value, active_field } = useAppSelector(({ form }) => form);

  const onItemClickCreator = (field: FieldName) => () => change_active_field(field);

  return (
    <ul className={styles.info}>
      {Object.entries(fields).map(
        ([field, { value, icon_name, transitioned, is_error }]: [FieldName, Field]) => {
          const onClick = onItemClickCreator(field);
          const placeholder = content[language][field];

          return (
            <InfoItem
              key={field}
              field={field}
              activeField={active_field}
              textareaValue={textarea_value}
              transitioned={transitioned}
              iconName={icon_name}
              value={value}
              isError={is_error}
              onClick={onClick}
              placeholder={placeholder}
            />
          );
        }
      )}
    </ul>
  );
};

export default memo(Info);
