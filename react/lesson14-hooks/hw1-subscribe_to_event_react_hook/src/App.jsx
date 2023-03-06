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

  let connectStatus = status === 'offLine' ? 'status status_offline' : 'status status_online';

  return <ConnectionStatus classForRender={connectStatus} status={status} />;
};
export default App;
