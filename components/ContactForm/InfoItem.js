import React from 'react';
import Icons from '../Icons';

const InfoItem = ({
  name,
  activeField,
  textareaValue,
  transitioned,
  iconName,
  value,
  isError,
  onClick,
  placeholder,
}) => {
  const Icon = Icons[iconName];
  const isActive = activeField === name;
  const isNotPlaceholder = (textareaValue && isActive) || transitioned;
  const isErrorNull = isError === null;

  return (
    <li
      className={`form__info-item ${name} ${isNotPlaceholder ? '' : 'placeholder'} ${
        value ? 'transitioned' : ''
      } ${isActive ? 'active' : ''} ${isErrorNull ? '' : isError ? 'error' : 'valid'}`}
      key={name}
      onClick={onClick(name)}
    >
      <Icon />
      <span>{value ? value : placeholder}</span>
    </li>
  );
};

export default InfoItem;
