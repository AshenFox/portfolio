import React, { FC, useEffect, memo, useCallback } from 'react';
import { HeaderDataInt, HeaderItemType } from '../';
import { useAppSelector } from '../../../store/hooks';
import FancyLink from '../../../ui/FancyLink';
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
  const scrollTop = useAppSelector(
    ({ game }) => game.game_container_dimensions.scrollTop
  );

  const { content } = data;

  let charElArr = [
    <Char
      key={rangeStart}
      active={rangeStart <= show}
      isCursor={rangeStart === show}
      scrollTop={rangeStart === show ? scrollTop : 0}
    />,
  ];

  const linksActive = show >= rangeEnd;

  let charNumber = rangeStart + 1;

  const wrapArrOfChar = useCallback(
    (charArr: JSX.Element[], data: HeaderItemType, wrapperIndex: number) => {
      const { type, props } = data;

      if (type === 'link')
        return [
          <FancyLink key={wrapperIndex + type} {...props}>
            {charArr}
          </FancyLink>,
        ];
      if (type === 'text') return charArr;
    },
    []
  );

  content.forEach((el, i) => {
    const { content } = el;

    const charElEndArr = content.split('').map((char, i) => {
      const key = charNumber + i;

      return (
        <Char
          key={key}
          active={key <= show}
          isCursor={key === show}
          scrollTop={key === show ? scrollTop : 0}
        >
          {char}
        </Char>
      );
    });

    charNumber += charElEndArr.length;

    charElArr = [...charElArr, ...wrapArrOfChar(charElEndArr, el, i)];
  });

  return (
    <TagName className={classStr + ' ' + (linksActive ? 'active' : '')}>
      {charElArr}
    </TagName>
  );
};

export default memo(Header);
