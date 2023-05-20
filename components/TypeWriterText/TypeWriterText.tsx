import React, { FC, useEffect, useState, useCallback } from 'react';
import { useAppSelector } from '../../store/hooks';
import Cursor from './components/Cursor';
import Header from './components/Header';

interface IHeaderItemText {
  content: string;
  type: 'text';
  props?: {};
}

interface IHeaderItemLink {
  content: string;
  type: 'link';
  props?: {
    href?: string;
    title?: string;
  };
}

export type THeaderItem = IHeaderItemText | IHeaderItemLink;

type THeaderItemArr = THeaderItem[];

type THeader = 'greeting' | 'description';

export interface IHeaderData {
  content: THeaderItemArr;
  type: THeader;
}

export type THeaderDataArr = IHeaderData[];

const countCharInElement = (data: THeaderItemArr) =>
  data.reduce((sum, el) => {
    const { content } = el;
    sum += content.length;
    return sum;
  }, 0);

const countAllChar = (text: THeaderDataArr) =>
  text.reduce((sum, el, i) => {
    const { content } = el;

    sum += countCharInElement(content);
    if (i !== text.length - 1) sum += 1;

    return sum;
  }, 0);

type Props = {
  text: THeaderDataArr;
};

const TypeWriterText: FC<Props> = ({ text }) => {
  const {
    content_loaded,
    content_loader: { is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const [allChar, setAllChar] = useState(countAllChar(text));

  const [show, setShow] = useState(0); // 326

  useEffect(() => {
    setShow(0);
    setAllChar(countAllChar(text));
  }, [text]);

  useEffect(() => {
    if (show < allChar && content_loaded && is_exited && show_navigation)
      setTimeout(() => {
        setShow(prev => prev + 1);
      }, 10);
  }, [show, content_loaded, is_exited, show_navigation, allChar]);

  let rangeStart = 0;
  let isCursorSmall = false;

  const Headers = text.map((data, i) => {
    const { content, type } = data;

    const range = countCharInElement(content);
    const rangeEnd = rangeStart + range;

    const containsCursor = show >= rangeStart && show <= rangeEnd;
    if (type === 'description' && containsCursor) isCursorSmall = true;

    let headerShow = rangeStart - 1;

    if (show >= rangeStart) headerShow = show;
    if (show >= rangeEnd) headerShow = rangeEnd;

    const HeaderEl = (
      <Header
        key={i}
        data={data}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        show={headerShow}
        type={type}
      />
    );

    rangeStart += range + 1;

    return HeaderEl;
  });

  return (
    <>
      {Headers}
      <Cursor isActive={true} isSmall={isCursorSmall} />
    </>
  );
};

export default TypeWriterText;
