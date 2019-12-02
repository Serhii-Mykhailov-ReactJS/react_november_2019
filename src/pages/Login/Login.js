// Core
import React, { useCallback } from 'react';
import { reduxForm, Form, Field, change } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
// Actions
import * as loginActions from '../../engine/core/todos/actions';
// UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const maxLength15 = maxLength(15);

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2);

const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

const minValue13 = minValue(13);

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined;

const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

function Login(props) {
  const { handleSubmit } = props;

  console.log('PROPS ', props);

  const onFormSubmit = useCallback((formValues) => {
    console.log('formValues ', formValues);
  }, []);

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        component={renderTextField}
        name="login"
        type="text"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
        label="Login"
      />
      <Field
        component={renderTextField}
        name="password"
        type="password"
        label="Password"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

function renderTextField(renderFieldProps) {
  const { input, meta, ...restProps } = renderFieldProps;
  const classes = {};
  const { error, touched, warning } = meta;

  console.log('renderFieldProps ', renderFieldProps);

  return (
    <>
      <TextField
        {...restProps}
        error={error}
        inputProps={input}
        className={classes.textField}
        margin="normal"
      />
      {touched && (
        (error && <div style={{ color: 'red' }}>{error}</div>) ||
        (warning && <span>{warning}</span>))}
    </>
  );
}

function mapStateToProps() {
  return {
    initialValues: {
      login: 'name',
      password: '12345678',
    },
  };
}

// this.props.loginActions.getTodo();
// this.props.loginActions.deleteTodo();

function mapDispatchToProps(dispatch) {
  // return {
  //   loginActions: bindActionCreators(loginActions, dispatch),
  // };
  return {
    changeField: val => dispatch(change('loginForm__01', 'login', val)),
  };
}

const validate = values => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Required'
  } else if (values.login.length > 15) {
    errors.login = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors
};

const reduxFormConfig = {
  form: 'loginForm__01', // a unique name for the form
  validate, // <--- validation function given to redux-form
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm(reduxFormConfig),
)(Login);

// export default reduxForm(reduxFormConfig)(Login);
