import React, { useState, useEffect } from 'react';




class ConnectionStatus extends React.Component {
  render() {
    return <div className={this.props.changeClass}>{this.props.status}</div>;
  }
}
export default ConnectionStatus;
