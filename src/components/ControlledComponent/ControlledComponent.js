// Core
import React, { useRef, useState } from 'react';
// Hooks
import { useInputValue } from '../../hooks/useInput';

// TODO: see https://ru.reactjs.org/docs/uncontrolled-components.html
// TODO: see https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
function ControlledComponent() {
  // TODO: see https://ru.reactjs.org/docs/refs-and-the-dom.html
  // const { value, onChange } = useInputValue();
  // const inputRef = useRef(null);
  //
  // if (inputRef.current) {
  //   console.log(inputRef.current);
  // }
  //
  // return (
  //   <input
  //     ref={inputRef}
  //     onChange={onChange}
  //     value={value}
  //   />
  // );

  // const [checked, setChecked] = useState(false);
  //
  // function onChange(ev) {
  //   setChecked(ev.target.checked);
  // }

  // TODO: see https://hackernoon.com/styling-logs-in-browser-console-2ec0807dc91a
  // console.log('%cCHECKED ', 'background:yellow;color:black;', checked);

  // return (
  //   <input
  //     checked={checked}
  //     onChange={onChange}
  //     type="checkbox"
  //   />
  // );

  const { value, onChange } = useInputValue();

  // TODO: see https://ru.reactjs.org/docs/handling-events.html
  function onFormSubmit(ev) {
    // TODO: see https://ru.reactjs.org/docs/events.html
    ev.preventDefault();
    console.log('Submit!');
    onChange({ target: { value: '' } });
  }

  // TODO: see https://ru.reactjs.org/docs/forms.html
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

export default ControlledComponent;
