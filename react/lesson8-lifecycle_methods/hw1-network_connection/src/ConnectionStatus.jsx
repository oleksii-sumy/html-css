import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor (props) {
    super(props);
  this.state = {
    status: 'online',
  };
  console.log(this.state.status);
  }
  componentDidMount() {
    window.addEventListener('offline', this.getOffStatus);
    const { offline } = window;
    this.setStatus(offline);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.getOffStatus);
  }

  getOffStatus = e => {
    const { offline } = e.target;
    this.setStatus(offline);
  };

  setStatus(status) {
    this.setState({
      status,
    });
      console.log(this.state.status);

  }

  render() {
    let renderingStatus;
    if (this.state.status === 'offline') {
      renderingStatus = <div className="status status_offline">offline</div>;
    } else {
      renderingStatus = <div className="status ">{this.state.status}</div>;
    }
    return <>{renderingStatus}</>;
  }
}

export default ConnectionStatus;
