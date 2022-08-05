import React from 'react';
import InfoItem from './InfoItem';

const Info = ({ activeField, fields, textareaValue, onItemClick }) => {
  return (
    <ul className='form__info'>
      {Object.entries(fields).map(
        ([name, { placeholder, value, iconName, transitioned, isError }]) => {
          return (
            <InfoItem
              name={name}
              activeField={activeField}
              textareaValue={textareaValue}
              transitioned={transitioned}
              iconName={iconName}
              value={value}
              isError={isError}
              onClick={onItemClick}
              placeholder={placeholder}
            />
          );
        }
      )}
    </ul>
  );
};

export default Info;
