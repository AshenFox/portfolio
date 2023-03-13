import {
  Dispatch,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

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

export const useOrientationChange = (
  onOrientationChangeAction: () => void,
  timeout?: number
) => {
  const onOrientationChange = useCallback(() => {
    if (timeout) {
      setTimeout(() => {
        onOrientationChangeAction();
      }, timeout);
    } else {
      onOrientationChangeAction();
    }
  }, [onOrientationChangeAction, timeout]);

  useEffect(() => {
    const orientation = screen?.orientation;

    if (orientation) {
      orientation.addEventListener('change', onOrientationChange);
    } else {
      window.addEventListener('orientationchange', onOrientationChange);
    }

    return () => {
      if (orientation) {
        orientation.removeEventListener('change', onOrientationChange);
      } else {
        window.removeEventListener('orientationchange', onOrientationChange);
      }
    };
  }, [onOrientationChange]);
};
