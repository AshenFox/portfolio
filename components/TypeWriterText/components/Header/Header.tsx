import React, { FC, memo, useCallback, useMemo } from 'react';
import { IHeaderData, THeaderItem } from '../../TypeWriterText';
import { useAppSelector } from '../../../../store/hooks';
import FancyLink from '../../../../ui/FancyLink';
import Char from '../Char';
import styles from './styles.module.scss';

interface OwnProps {
  data: IHeaderData;
  rangeStart: number;
  rangeEnd: number;
  show: number;
  type: string;
}

type Props = OwnProps;

const Header: FC<Props> = ({ data, rangeStart, rangeEnd, show, type }) => {
  const TagName = useMemo<keyof JSX.IntrinsicElements>(() => {
    if (type === 'greeting') {
      return 'h1';
    }
    if (type === 'description') {
      return 'h4';
    }

    return null;
  }, [type]);

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
    (charArr: JSX.Element[], data: THeaderItem, wrapperIndex: number) => {
      const { type, props } = data;

      if (type === 'link')
        return [
          <FancyLink key={wrapperIndex + type} classStr={styles.link} {...props}>
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
    <TagName className={styles[type] + ' ' + (linksActive ? styles.active : '')}>
      {charElArr}
    </TagName>
  );
};

export default memo(Header);
