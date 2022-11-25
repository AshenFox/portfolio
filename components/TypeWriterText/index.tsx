import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import Cursor from './Cursor';
import Header from './Header';

// type HeaderTextType = 'text' | 'link';

interface HeaderItemTextInt {
  content: string;
  type: 'text';
  props?: {};
}

interface HeaderItemLinkInt {
  content: string;
  type: 'link';
  props?: {
    href?: string;
    classStr?: string;
    title?: string;
  };
}

export type HeaderItemType = HeaderItemTextInt | HeaderItemLinkInt;

type HeaderItemArrType = HeaderItemType[];

type HeaderType = 'greeting' | 'description';

export interface HeaderDataInt {
  content: HeaderItemArrType;
  type: HeaderType;
}

type HeaderDataArrType = HeaderDataInt[];

interface OwnProps {}

type Props = OwnProps;

const TypeWriterText: FC<Props> = () => {
  const {
    content_loaded,
    content_loader: { is_exited },
    show_navigation,
  } = useAppSelector(({ sslider }) => sslider);

  const [text, setText] = useState<HeaderDataArrType>([
    {
      content: [{ content: 'Hello, my name is Rafael Caferati.', type: 'text' }],
      type: 'greeting',
    },
    {
      content: [
        { content: 'I am an ', type: 'text' },
        {
          content: 'award-winning',
          type: 'link',
          props: { href: '/portfolio', classStr: 'about__link', title: 'Portfolio' },
        },
        {
          content: ' full-stack web developer and UI/UX javascript specialist.',
          type: 'text',
        },
      ],
      type: 'description',
    },
    {
      content: [
        {
          content: 'Check out my articles, React and React Native UI components at the ',
          type: 'text',
        },
        {
          content: 'code laboratory',
          type: 'link',
          props: { href: '/portfolio', classStr: 'about__link', title: 'Portfolio' },
        },
        { content: '.', type: 'text' },
      ],
      type: 'description',
    },
    {
      content: [
        {
          content: 'Feel free to take a look at my latest projects on the ',
          type: 'text',
        },
        {
          content: 'web portfolio page',
          type: 'link',
          props: { href: '/portfolio', classStr: 'about__link', title: 'Portfolio' },
        },
        { content: '.', type: 'text' },
      ],
      type: 'description',
    },
    {
      content: [
        {
          content: 'Remotely available UTC-1 to UTC+8. ',
          type: 'text',
        },
        {
          content: 'rafael@caferati.me',
          type: 'link',
          props: { href: '/portfolio', classStr: 'about__link', title: 'Portfolio' },
        },
      ],
      type: 'description',
    },
  ]);

  const countCharInElement = (data: HeaderItemArrType) =>
    data.reduce((sum, el) => {
      const { content } = el;
      sum += content.length;
      return sum;
    }, 0);

  const [allChar, setAllChar] = useState(
    text.reduce((sum, el, i) => {
      const { content } = el;

      sum += countCharInElement(content);
      if (i !== text.length - 1) sum += 1;

      return sum;
    }, 0)
  );

  const [show, setShow] = useState(0); // 326

  useEffect(() => {
    if (show < allChar && content_loaded && is_exited && show_navigation)
      setTimeout(() => {
        setShow((prev) => prev + 1);
      }, 10);
  }, [show, content_loaded, is_exited, show_navigation]);

  let rangeStart = 0;
  let isCursorSmall = false;

  const Headers = text.map((data, i) => {
    const { content, type } = data;

    const range = countCharInElement(content);
    const rangeEnd = rangeStart + range;

    let TagName = null as keyof JSX.IntrinsicElements;
    let classStr: string = null;

    if (type === 'greeting') {
      TagName = 'h1';
      classStr = 'about__greeting';
    }
    if (type === 'description') {
      TagName = 'h4';
      classStr = 'about__description';
    }

    const containsCursor = show >= rangeStart && show <= rangeEnd;
    if (type === 'description' && containsCursor) isCursorSmall = true;

    const HeaderEl = (
      <Header
        key={i}
        data={data}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        show={show}
        TagName={TagName}
        classStr={classStr}
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

/* <h1 className='about__greeting'>Hello, my name is Rafael Caferati.</h1>
      <h4 className='about__description'>
        I am an{' '}
        <FancyLink href='/portfolio' classStr='about__link' title={'Portfolio'}>
          award-winning
        </FancyLink>{' '}
        full-stack web developer and UI/UX javascript specialist.
      </h4>
      <h4 className='about__description'>
        Check out my articles, React and React Native UI components at the{' '}
        <FancyLink href='/portfolio' classStr='about__link' title={'Portfolio'}>
          code laboratory
        </FancyLink>
        .
      </h4>
      <h4 className='about__description'>
        Feel free to take a look at my latest projects on the{' '}
        <FancyLink href='/portfolio' classStr='about__link' title={'Portfolio'}>
          web portfolio page
        </FancyLink>
        .
      </h4>
      <h4 className='about__description'>
        Remotely available UTC−1 to UTC+8.{' '}
        <FancyLink href='/contact-page' classStr='about__link'>
          rafael@caferati.me
        </FancyLink>
      </h4> */
