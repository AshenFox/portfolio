import React, { FC, MouseEventHandler } from 'react';
import InfoItem from './InfoItem';
import { Fields } from './index';

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
        ([name, { placeholder, value, iconName, transitioned, isError }]) => {
          const onClick = onItemClickCreator(name);

          return (
            <InfoItem
              key={name}
              name={name}
              activeField={activeField}
              textareaValue={textareaValue}
              transitioned={transitioned}
              iconName={iconName}
              value={value}
              isError={isError}
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
