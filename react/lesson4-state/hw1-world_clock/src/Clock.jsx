import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formatDate = date => moment(date).format('h:mm:ss A');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: getTimeWithOffset(props.offset),
    };
    setInterval(() => {
      this.setState({
        offset: getTimeWithOffset(this.props.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{formatDate(this.state.offset)}</div>
      </div>
    );
  }
}

export default Clock;
