import React from 'react';

const Info = (props) => {
  if(!props.info) {
    return null;
  }
  return <div className="info">{props.info}</div>;
}

export default Info;
