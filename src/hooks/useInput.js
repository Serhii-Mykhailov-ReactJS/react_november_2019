import { useState } from 'react';
// Custom hook
// TODO: see https://ru.reactjs.org/docs/hooks-custom.html
export function useInputValue(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  function onChange(ev) {
    setValue(ev.target.value);
  }

  return { value, onChange };
}
