// Core
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// Styles
// TODO: see https://ru.reactjs.org/docs/faq-styling.html
import './MyFirstFunctionComponent.css';

// My first function component
// TODO: see https://ru.reactjs.org/docs/components-and-props.html
function MyFirstFunctionComponent(props) {
  const { name } = props;
  // TODO: do not do that!
  // TODO: use react fefs
  // const elem = document.getElementById('main-header');

  const styles = {
    backgroundColor: 'yellow',
  };

  return (
    <h1 id="" className="main-header" style={styles}>
      Привет {name}, Я функциональный компонент!
    </h1>
  );
}

// TODO: see https://ru.reactjs.org/docs/react-component.html#displayname
MyFirstFunctionComponent.displayName = 'MyFirstFunctionComponent';

// TODO: see https://ru.reactjs.org/docs/typechecking-with-proptypes.html
MyFirstFunctionComponent.propTypes = {
  name: PropTypes.string,
};

MyFirstFunctionComponent.defaultProps = {
  name: 'User',
};

export default MyFirstFunctionComponent;

// My first arrow function component
const AppFunc = (props) => {
  const { currentPage = 0, pageSize = 20 } = props;

  const cb = React.useCallback(() => {
    getItems({ currentPage, pageSize });
  }, [currentPage, pageSize]);

  React.useEffect(() => {
    cb();
  }, [cb]);

  function getItems() {
    // Do some magic here
  }

  return (
    <h1>
      Привет, Я стрелка компонент!
    </h1>
  );
};

function MyFunctionComponent(props) {
  // TODO: Не забудь закрыть тег!
  // return (
  //   <>
  //     <img />
  //     <br />
  //     <hr />
  //     <input type="text" />
  //   </>
  // );

  // TODO: see https://ru.reactjs.org/docs/hooks-state.html
  const [state, setState] = useState('');
  // const [object, setObject] = useState({});
  // const [arr, setArr] = useState([]);

  // TODO: componentDidMount()
  // useEffect(() => {
  //   console.log('Hello from func component!');
  //   setState('new state');
  // }, []);

  // TODO: see https://ru.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    console.log('Hello from func component!');
    console.log('STATE ', state);
    setState('new state');
  }, [state]);

  console.log('state ', state);

  const { children } = props;
  const elRef = useRef();

  const { value, onChange } = useInputValue('');

  if (!children) {
    // TODO: do not use here react hooks! see https://ru.reactjs.org/docs/hooks-rules.html
    // const elRef = useRef();
    return null;
  }

  // TODO: do not do that, see https://ru.reactjs.org/docs/hooks-rules.html
  // const elRef2 = useRef();

  return (
    <>
      <input
        onChange={onChange}
        value={value}
      />
      <h2 ref={elRef}>{children}</h2>
    </>
  );
}

// Custom hook
// TODO: see https://ru.reactjs.org/docs/hooks-custom.html
function useInputValue(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  function onChange(ev) {
    setValue(ev.target.value);
  }

  return { value, onChange };
}
