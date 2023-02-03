import React from 'react';

const Offline = (props) => {
  return (
    <>
      <span className="status_text">Offline</span>
      <button className="status__btn">
        Reconnect
      </button>
    </>
  );
}
export default Offline;