import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export const useStateWithRef = (initValue) => {
  const [value, setValue] = useState(initValue);
  const valueRef = useRef(value);
  valueRef.current = value;

  return [value, setValue, valueRef];
};
