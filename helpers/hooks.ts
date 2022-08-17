import {
  Dispatch,
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';

// type InitValueStateWithRef = any;
type UseStateWithRef = (
  initValue: any
) => [any, Dispatch<React.SetStateAction<any>>, MutableRefObject<any>];

export const useStateWithRef = <InitValue extends unknown>(
  initValue: InitValue
): [
  InitValue,
  Dispatch<React.SetStateAction<InitValue>>,
  MutableRefObject<InitValue>
] => {
  const [value, setValue] = useState(initValue);
  const valueRef = useRef(value);
  valueRef.current = value;

  return [value, setValue, valueRef];
};

export const useUpdatedRef = <InitValue extends unknown>(
  initValue: InitValue
): MutableRefObject<InitValue> => {
  const valueRef = useRef(initValue);
  valueRef.current = initValue;

  return valueRef;
};
