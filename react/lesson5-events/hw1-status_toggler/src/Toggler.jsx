import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: 'Off',
    };
  }
  handleToggle() {
    this.state.toggler === 'Off'
      ? this.setState({
          toggler: 'On',
        })
      : this.setState({
          toggler: 'Off',
        });
  }
  render() {
    return (
      <div className="toggler" onClick={() => this.handleToggle()}>
        {this.state.toggler}
      </div>
    );
  }
}

export default Toggler;
