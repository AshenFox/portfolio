import React, { FC, MouseEventHandler } from 'react';
import Icons from '../../../ui/Icons';

interface OwnProps {
  field: string;
  activeField: string;
  textareaValue: string;
  transitioned: boolean;
  iconName: string;
  value: string;
  isError: boolean;
  onClick: MouseEventHandler<HTMLElement>;
  placeholder: string;
}

type Props = OwnProps;

const InfoItem: FC<Props> = ({
  field,
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
  const isActive = activeField === field;
  const isNotPlaceholder = (textareaValue && isActive) || transitioned;
  const isErrorNull = isError === null;

  return (
    <li
      className={`form__info-item ${field} ${isNotPlaceholder ? '' : 'placeholder'} ${
        value ? 'transitioned' : ''
      } ${isActive ? 'active' : ''} ${isErrorNull ? '' : isError ? 'error' : 'valid'}`}
      key={field}
      onClick={onClick}
    >
      <Icon />
      <span>{value ? value : placeholder}</span>
    </li>
  );
};

export default InfoItem;
