import React, { FC, MouseEventHandler, memo } from 'react';
import Icons from '@ui/Icons';
import styles from '../styles.module.scss';

type Props = {
  field: string;
  activeField: string;
  textareaValue: string;
  transitioned: boolean;
  iconName: string;
  value: string;
  isError: boolean;
  onClick: MouseEventHandler<HTMLElement>;
  placeholder: string;
};

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
      className={`${styles.info_item} ${styles[field]} ${
        isNotPlaceholder ? '' : styles.placeholder
      } ${value ? styles.transitioned : ''} ${isActive ? styles.active : ''} ${
        isErrorNull ? '' : isError ? styles.error : styles.valid
      }`}
      key={field}
      onClick={onClick}
    >
      <Icon />
      <span>{value ? value : placeholder}</span>
    </li>
  );
};

export default memo(InfoItem);
