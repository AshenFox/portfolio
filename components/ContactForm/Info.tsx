import React, { FC, MouseEventHandler } from 'react';
import { Fields } from '../../store/reducers/form/contactFormInitState';
import InfoItem from './InfoItem';

interface OwnProps {
  activeField: string;
  fields: Fields;
  textareaValue: string;
  onItemClickCreator: (field: string) => MouseEventHandler<HTMLElement>;
}

type Props = OwnProps;

const Info: FC<Props> = ({ activeField, fields, textareaValue, onItemClickCreator }) => {
  return (
    <ul className='form__info'>
      {Object.entries(fields).map(
        ([name, { placeholder, value, icon_name, transitioned, is_error }]) => {
          const onClick = onItemClickCreator(name);

          return (
            <InfoItem
              key={name}
              name={name}
              activeField={activeField}
              textareaValue={textareaValue}
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
