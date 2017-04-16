import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

const validate = values => {
  const errors = {};
  if(!values.name){
    errors.name = 'Required';
  }
  if(!values.email){
    errors.email = 'Required';
  }
  if(!values.password){
    errors.password = 'Required';
  }
  if(!values.passwordConfirm){
    errors.passwordConfirm = 'Required';
  }
  if(values.password !== values.passwordConfirm){
    errors.passwordConfirm = 'Passwords should match!';
  }
  return errors;
};

const renderField = ({input, label, type, meta: { touched, error }}) => (
  <div className='form-field'>
    <label>{ label }</label>
    <div>
      <input {...input} placeholder={label} type={type} name={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class Form extends Component {
  render(){
    const {
      handleSubmit,
      reset,
      pristine,
      submitting
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field type='text' name='name' component={renderField} label='name'/>
        <Field type='email' name='email' component={renderField} label='email'/>
        <Field type='password' name='password' component={renderField} label='password'/>
        <Field type='password' name='passwordConfirm' component={renderField} label='passwordConfirm'/>
          <p>
            <button type='submit' disabled={pristine || submitting}>submit</button>
          </p>
          <p>
            <button onClick={reset} disabled={pristine || submitting}>reset</button>
          </p>
      </form>
    )
  }
}

export default reduxForm({
  form:'form',
  validate
})(Form);
