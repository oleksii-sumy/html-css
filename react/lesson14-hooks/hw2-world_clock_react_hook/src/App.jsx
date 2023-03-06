import React, { useState, useEffect } from 'react';
import Clock from './Clock';

const App = () => {

  const [hide, setHide] = useState(true);
  
  return (
    <>
      <button className="btn-hide" onClick={() => setHide(false)}>
        HIDE
      </button>

      <div>{ hide && <Clock location={'NEY YORK'} offset={-5} />}</div>
      <div>{hide && <Clock location={'KIYV'} offset={2} />}</div>
      <div>{hide && <Clock location={'LONDON'} offset={0} />}</div>
    </>
  );
};
export default App;
