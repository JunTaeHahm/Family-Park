import { useCallback, useState } from 'react';

const useInput = (initialData) => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    const trimValue = e.target.value;
    setValue(trimValue.trim());
  }, []);
  return [value, handler, setValue];
};

export default useInput;
