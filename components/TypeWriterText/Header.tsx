import React, { FC, useEffect } from 'react';
import { HeaderDataInt } from '.';
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

  // console.log({ rangeStart, rangeEnd });

  const testFunction = () => {
    console.log('=======');
    let charNumber = rangeStart;

    content.map((el, i) => {
      const { content, type } = el;

      const charElArr = content.split('').map((char, i) => {
        /* 
        <Char key={charNumber + i + 1} active={charNumber <= show}>
            {char}
          </Char>
        
        */
        return {
          key: charNumber + i + 1,
          active: charNumber + i + 1 <= show,
          char,
        };
      });

      const diff = show - charNumber;
      charNumber += charElArr.length;

      const hidden = charElArr;
      const visible = hidden.splice(0, diff);

      console.log({ charElArr, diff, show, rangeStart, charNumber });
      console.log({ visible, hidden });
    });

    const testArr = 'Hello world!'.split('');
    const cutArr = testArr.splice(0, -5);
    // console.log({ testArr, cutArr });
  };

  useEffect(() => {
    testFunction();
  }, []);

  return (
    <TagName className={classStr}>
      {content.map((el, i) => {
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
      })}
    </TagName>
  );
};

export default Header;

/* 

<span key={i} className={`about__char ${charNumber <= show ? 'active' : ''}`}>
              {char}
            </span>


*/
