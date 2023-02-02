import React from 'react';

const Info = ({text}) => {
  if(!text) {
    return null;
  }
  return (
    <div className='message'>
      {text}
    </div>
  )
}

export default Info;