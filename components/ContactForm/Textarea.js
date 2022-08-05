import React, { useEffect, useRef } from 'react';

const Textarea = ({
  children,
  isError,
  transitioned,
  name,
  onChange,
  onKeyDown,
  value,
}) => {
  const textareaRef = useRef(null);
  const isErrorNull = isError === null;

  const setElHeight = (el) => {
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
      {/* <IconEl /> */}
      {children}
      <textarea
        name={name}
        rows='1'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        ref={textareaRef}
      ></textarea>
    </div>
  );
};

export default Textarea;
