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
  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onClick={this.onLogout} />;
    } else {
      button = <Login onClick={this.onLogin}/>;
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
