import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogoinClick = () => {
    this.setState({
      isLoggedIn: true,
    });
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
      button = <Login onLogin={this.handleLogoinClick} />;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div className="btn">{button}</div>
      </div>
    );
  }
}

export default Auth;
