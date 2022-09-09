import React, { FC } from 'react';
import { HeaderDataInt } from '.';
import FancyLink from '../FancyLink';

interface OwnProps {
  data: HeaderDataInt;
  rangeStart: number;
  rangeEnd: number;
  show: number;
}

type Props = OwnProps;

const Header: FC<Props> = ({ data, rangeStart, rangeEnd, show }) => {
  console.log({ rangeStart, rangeEnd });
  const { content, type } = data;

  let TagName = null as keyof JSX.IntrinsicElements;
  let classStr = null;

  if (type === 'greeting') {
    TagName = 'h1';
    classStr = 'about__greeting';
  }
  if (type === 'description') {
    TagName = 'h4';
    classStr = 'about__description';
  }

  let charNumber = rangeStart;

  return (
    <TagName className={classStr}>
      {content.map((el, i) => {
        const { content, type } = el;

        const charElArr = content.split('').map((char, i) => {
          charNumber += 1;

          return (
            <span
              key={i}
              className={`about__char ${
                charNumber <= show ? 'active' : ''
              } ${charNumber}`}
            >
              {char}
            </span>
          );
        });

        if (type === 'link')
          return (
            <FancyLink key={i} {...el.props}>
              {charElArr}
            </FancyLink>
          );
        if (type === 'text') return charElArr;
      })}
    </TagName>
  );
};

export default Header;
