import React, { FC, useEffect } from 'react';
import { HeaderDataInt, HeaderItemType } from '.';
import FancyLink from '../FancyLink';
import Char from './Char';

interface OwnProps {
  data: HeaderDataInt;
  rangeStart: number;
  rangeEnd: number; // ?????
  show: number;
  TagName: keyof JSX.IntrinsicElements;
  classStr: string;
}

type Props = OwnProps;

const Header: FC<Props> = ({ data, rangeStart, rangeEnd, show, TagName, classStr }) => {
  const { content, type } = data;

  let charElArr = [
    <Char key={rangeStart} active={rangeStart <= show} isCursor={rangeStart === show} />,
  ];

  let charNumber = rangeStart + 1;

  const wrapArrOfChar = (
    charArr: JSX.Element[],
    data: HeaderItemType,
    wrapperIndex: number
  ) => {
    const { type, props } = data;

    if (type === 'link')
      return [
        <FancyLink key={wrapperIndex + type} {...props}>
          {charArr}
        </FancyLink>,
      ];
    if (type === 'text') return charArr;
  };

  content.forEach((el, i) => {
    const { content } = el;

    const charElEndArr = content.split('').map((char, i) => {
      const key = charNumber + i;

      return (
        <Char key={key} active={key <= show} isCursor={key === show}>
          {char}
        </Char>
      );
    });

    charNumber += charElEndArr.length;

    charElArr = [...charElArr, ...wrapArrOfChar(charElEndArr, el, i)];
  });

  return <TagName className={classStr}>{charElArr}</TagName>;
};

export default Header;

/* 

<span key={i} className={`about__char ${charNumber <= show ? 'active' : ''}`}>
              {char}
            </span>

<span>{visibleElArr}</span>
      <span>{hiddenElArr}</span>
*/

/* 
const testFunction = () => {
    console.log('=======');
    let charNumber = rangeStart;

    let hiddenElArr = [];
    let visibleElArr = [];

    const wrapArrOfChar = (charArr: JSX.Element[], data: HeaderItemType) => {
      const { type, props } = data;

      if (type === 'link') return [<FancyLink {...props}>{charArr}</FancyLink>];
      if (type === 'text') return charArr;
    };

    content.forEach((el, i) => {
      const { content } = el;

      const charElArr = content.split('').map((char, i) => {
        const key = charNumber + i + 1;

        return (
          <Char key={key} active={key <= show}>
            {char}
          </Char>
        );
      });

      const diff = show - charNumber;
      charNumber += charElArr.length;

      const hidden = charElArr;
      const visible = hidden.splice(0, diff);

      if (hidden.length) hiddenElArr = [...hiddenElArr, ...wrapArrOfChar(hidden, el)];
      if (visible.length) visibleElArr = [...visibleElArr, ...wrapArrOfChar(visible, el)];
    });

    console.log({ hiddenElArr, visibleElArr });
  };


*/

/* 

content.map((el, i) => {
        const { content, type } = el;

        const charElArr = content.split('').map((char, i) => {
          charNumber += 1;

          return (
            <Char key={i} active={charNumber <= show}>
              {char}
            </Char>
          );
        });

        if (type === 'link')
          return (
            <FancyLink key={i} {...el.props}>
              {charElArr}
            </FancyLink>
          );
        if (type === 'text') return charElArr;
      })

*/
