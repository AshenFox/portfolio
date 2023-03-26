import React, { FC, MouseEventHandler } from 'react';
import { useActions, useAppSelector } from '../../../store/hooks';
import {
  Field,
  FieldName,
  Fields,
} from '../../../store/reducers/form/contactFormInitState';
import InfoItem from './InfoItem';

interface OwnProps {}

type Props = OwnProps;

const Info: FC<Props> = () => {
  const { change_active_field } = useActions();

  const { fields, textarea_value, active_field } = useAppSelector(({ form }) => form);

  const onItemClickCreator = (field: FieldName) => () => change_active_field(field);

  return (
    <ul className='form__info'>
      {Object.entries(fields).map(
        ([field, { placeholder, value, icon_name, transitioned, is_error }]: [
          FieldName,
          Field
        ]) => {
          const onClick = onItemClickCreator(field);

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

export default Info;
