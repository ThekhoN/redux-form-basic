import React, { Component } from 'react';
import Form from './form';
import { connect } from 'react-redux';

class AppComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      submitted: {
        name: '',
        email: '',
        password: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(data){
    console.log(data);
    this.setState({
      submitted: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    });
  }
  render(){
    const { submitted } = this.state;
    return (<div className='app'>
      <div className='submitted'>
        <h2>Submitted Values:</h2>
        <p>Name: <span className='submitted-value'>{ submitted.name }</span><br/></p>
        <p>Email: <span className='submitted-value'>{ submitted.email }</span><br/></p>
        <p>Password: <span className='submitted-value'>{ submitted.password }</span><br/></p>
      </div>
      <Form onSubmit={this.handleSubmit}/>
    </div>)
  }
}

const mapDispatchToProps = state => {
  return {
    form: state.form
  }
};

const App = connect( mapDispatchToProps, null )(AppComponent);
export default App;
