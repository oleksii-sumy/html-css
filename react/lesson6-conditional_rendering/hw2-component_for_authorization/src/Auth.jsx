import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      spinner: false,
    };
  }
  handleLogoinClick = () => {
    this.setState({
      spinner: true,
    });

setTimeout(
  () =>
    this.setState({
      isLoggedIn: true,
      spinner: false,
    }),
  2000,
);
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onLogout={this.handleLogoutClick} />;
    } else {
      button = this.state.spinner ? <Spinner size={'45px'} /> : <Login onLogin={this.handleLogoinClick} />;
    }
    return <>
    {button}
    </>
  }
}

export default Auth;
