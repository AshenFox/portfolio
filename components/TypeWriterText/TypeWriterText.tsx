import React, { FC, useEffect, useState, useCallback, memo } from 'react';
import { useAppSelector } from '@store/hooks';
import Cursor from './components/Cursor';
import Header from './components/Header';

export type HeaderContentItem = {
  type: 'link' | 'text' | (string & {});
  content: string;
  props?: {
    href?: string;
    title?: string;
  };
};

export type HeaderContent = HeaderContentItem[];

export type HeaderType = 'greeting' | 'description' | (string & {});

export interface HeaderData {
  content: HeaderContent;
  type: HeaderType;
}

export type HeaderListData = HeaderData[];

const countCharInElement = (data: HeaderContent) =>
  data.reduce((sum, el) => {
    const { content } = el;
    sum += content.length;
    return sum;
  }, 0);

const countAllChar = (text: HeaderListData) =>
  text.reduce((sum, el, i) => {
    const { content } = el;

    sum += countCharInElement(content);
    if (i !== text.length - 1) sum += 1;

    return sum;
  }, 0);

type Props = {
  text: HeaderListData;
};

const TypeWriterText: FC<Props> = ({ text }) => {
  const {
    content_loaded,
    content_loader: { is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const [allChar, setAllChar] = useState(countAllChar(text));

  const [show, setShow] = useState(0);

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

export default memo(TypeWriterText);
