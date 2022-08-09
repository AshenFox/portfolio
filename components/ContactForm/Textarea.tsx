import React, {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

interface OwnProps {
  children: ReactNode;
  isError: boolean;
  transitioned: boolean;
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown: KeyboardEventHandler<HTMLTextAreaElement>;
  value: string;
}

type Props = OwnProps;

const Textarea: FC<Props> = ({
  children,
  isError,
  transitioned,
  name,
  onChange,
  onKeyDown,
  value,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isErrorNull = isError === null;

  const setElHeight = (el: HTMLTextAreaElement) => {
    el.style.height = `0px`;
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    setElHeight(textareaRef.current);
  }, [value]);

  return (
    <div
      className={`form__textarea ${isErrorNull ? '' : isError ? 'error' : 'valid'} ${
        transitioned ? '' : 'placeholder'
      }`}
    >
      {children}
      <textarea
        name={name}
        rows={1}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        ref={textareaRef}
      ></textarea>
    </div>
  );
};

export default Textarea;
