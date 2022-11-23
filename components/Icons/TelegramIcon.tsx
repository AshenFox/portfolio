import React, { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const TelegramIcon: FC<Props> = () => {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path d='M20.6651 3.717L2.93509 10.554C1.72509 11.04 1.73209 11.715 2.71309 12.016L7.26509 13.436L17.7971 6.791C18.2951 6.488 18.7501 6.651 18.3761 6.983L9.8431 14.684H9.84109L9.8431 14.685L9.5291 19.377C9.9891 19.377 10.1921 19.166 10.4501 18.917L12.6611 16.767L17.2601 20.164C18.1081 20.631 18.7171 20.391 18.9281 19.379L21.9471 5.151C22.2561 3.912 21.4741 3.351 20.6651 3.717V3.717Z' />
    </svg>
  );
};

export default TelegramIcon;