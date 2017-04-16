import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

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
          <label>
            <span>name:</span>
            <Field type='text' placeholder='name' name='name' component='input'/>
          </label>
          <label>
            <span>email:</span>
            <Field type='text' placeholder='email' name='email' component='input'/>
          </label>
          <label>
            <span>password:</span>
            <Field type='text' placeholder='password' name='password' component='input'/>
          </label>
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
  form:'form'
})(Form);
