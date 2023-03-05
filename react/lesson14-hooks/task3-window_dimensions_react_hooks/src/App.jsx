import React, {useState} from 'react';
import Dimensions from './Dimensions';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
        <button className="btn" onClick={() => setIsVisible(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setIsVisible(false)}>
          Hide
        </button>
      {isVisible && <Dimensions />}
    </div>
  );
}
export default App;
