import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'online',
    };
  }
  componentDidMount() {
    window.addEventListener('online', this.getOnStatus);
    window.addEventListener('offline', this.getOffStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.getOffStatus);
    window.removeEventListener('online', this.getOnStatus);
  }

  getOffStatus = e => {
    this.setStatus('offline');
  };
  getOnStatus = e => {
    this.setStatus('online');
  };

  setStatus(status) {
    this.setState({
      status,
    });
  }

  render() {
    let renderingStatus;
    if (this.state.status === 'offline') {
      renderingStatus = <div className="status status_offline">{this.state.status}</div>;
    } else {
      renderingStatus = <div className="status ">{this.state.status}</div>;
    }
    return <>{renderingStatus}</>;
  }
}

export default ConnectionStatus;


