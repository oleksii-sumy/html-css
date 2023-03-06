import React, { useState, useEffect } from 'react';
import ConnectionStatus from './ConnectionStatus';

const App = () => {
  const [status, setStatus] = useState('onLine');

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

  let changeClass = status === 'offline' ? "status status_offline" : "status";

  return <ConnectionStatus changeClass={changeClass} status={status} />;
};
export default App;
