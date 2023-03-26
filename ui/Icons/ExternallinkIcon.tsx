import React, { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const ExternallinkIcon: FC<Props> = () => {
  return (
    <svg width='25' height='25' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
      <path d='M13.8888 0L18.4625 4.57361L8.74023 14.2958L10.7041 16.2597L20.4263 6.5375L25 11.1111V0H13.8888Z' />
      <path d='M22.2222 22.2222H2.77778V2.77778H12.5L9.72222 0H2.77778C1.24583 0 0 1.24583 0 2.77778V22.2222C0 23.7542 1.24583 25 2.77778 25H22.2222C23.7542 25 25 23.7542 25 22.2222V15.2778L22.2222 12.5V22.2222Z' />
    </svg>
  );
};

export default ExternallinkIcon;
