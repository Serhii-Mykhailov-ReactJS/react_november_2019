// Core
import React, { Component, createRef } from 'react';
import * as PropTypes from 'prop-types';
// Components
import MyFunctionComponent from './MyFunctionComponent/MyFunctionComponent';
// Styles
import './App.css';

class MyFirstClassComponent extends Component {
  // TODO: see https://ru.reactjs.org/docs/react-component.html#constructor
  constructor(props) {
    super(props);
    // Initialize state here
    // TODO: see https://ru.reactjs.org/docs/state-and-lifecycle.html
    this.state = {
      user: 'Вася',
      userName: 'KM',
      isOpen: false,
    };
    this.divRef = createRef();
  }

  // TODO: see https://ru.reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    // console.log('Component did mount!');

    // this.setState({ user: 'Петя' }, () => {
    //   console.log('Callback');
    // });

    // TODO: Do not do that!!! Kostya!
    // TODO: Do not mutate state!
    // this.state = { user: 'Костя' };

    // TODO: Use only setState method
    // this.setState({ userName: 'GoodMan2!' });
    // this.setState({ userName: 'GoodMan3!' });

    // TODO: see https://ru.reactjs.org/docs/react-component.html#state
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  // TODO: see https://ru.reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;

    if (isOpen !== prevState.isOpen) {
      console.log('prevState', prevState.isOpen);
      console.log('componentDidUpdate()', isOpen);
    }
  }

  // TODO: see https://ru.reactjs.org/docs/react-component.html#render
  render() {
    // const { name } = this.props;
    const { user, userName } = this.state;
    // console.log('Rendering...', { user, userName });

    console.log(this.divRef.current);

    return (
      <div>
        <div ref={this.divRef}>Ref 1</div>
        <div ref={this.divRef}>Ref 2</div>
        <AppFuncComponent name={user} />
        <AppFunc />
        <MyFunctionComponent>
          Serhii
        </MyFunctionComponent>
      </div>
    );
  }
}

MyFirstClassComponent.displayName = 'MyFirstClassComponent';

MyFirstClassComponent.propTypes = {
  name: PropTypes.string,
};

MyFirstClassComponent.defaultProps = {
  name: 'User',
};

export default MyFirstClassComponent;
