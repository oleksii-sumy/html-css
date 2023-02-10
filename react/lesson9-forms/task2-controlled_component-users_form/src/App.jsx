import React, { Component } from 'react';
import UserForm from './UserForm';

function App(props) {
  createUser = props => {
    console.log(props.this.state);
  };

  return <UserForm />;
}

export default App;
