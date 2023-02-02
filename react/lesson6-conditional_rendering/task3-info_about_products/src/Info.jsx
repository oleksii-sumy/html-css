import React from 'react';

const Info = (props) => {
  if(!props.info) {
    return null;
  }
  return <div className="message">{props.info}</div>;
}

export default Info;