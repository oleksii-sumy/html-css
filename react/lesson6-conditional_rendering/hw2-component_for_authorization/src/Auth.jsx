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
      isLoggedIn: true,
      spinner: true,

    });

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
      button = <Login onLogin={this.handleLogoinClick} />;
    }
    return (
      <>
        {setTimeout( () => {button}, 2000 )}
        {this.state.spinner === true && <Spinner size={'45px'} />}
      </>
    );
  }
}

export default Auth;




