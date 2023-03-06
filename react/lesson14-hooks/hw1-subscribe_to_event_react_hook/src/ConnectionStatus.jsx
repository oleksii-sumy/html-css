import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const getOffStatus = e => {
      setStatus('offline');
    };
    const getOnStatus = e => {
      setStatus('online');
    };

    window.addEventListener('online', getOnStatus);
    window.addEventListener('offline', getOffStatus);

    return () => {
      window.removeEventListener('online', getOnStatus);
      window.removeEventListener('offline', getOffStatus);
    };
  }, [status]);

  let changeClass = status === 'offline' ? 'status status_offline' : 'status';

  return <div className={changeClass}>{status}</div>;
};
export default ConnectionStatus;
