import React, { FC, useEffect } from 'react';
import { HeaderDataInt, HeaderItemType } from '.';
import FancyLink from '../FancyLink';
import Char from './Char';

interface OwnProps {
  data: HeaderDataInt;
  rangeStart: number;
  rangeEnd: number; // ?????
  show: number;
}

type Props = OwnProps;

const Header: FC<Props> = ({ data, rangeStart, rangeEnd, show }) => {
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

  return (
    <TagName className={classStr}>
      <span>{visibleElArr}</span>
      <span>{hiddenElArr}</span>
    </TagName>
  );
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
