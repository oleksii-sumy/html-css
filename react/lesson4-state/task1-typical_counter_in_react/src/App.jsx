import React from 'react';
import Counter from './Counter.jsx';

const App =() => {
  return (
    <>
    <Counter start={5} interval={1000}/>
    <Counter start={12} interval={1500}/>
    <Counter start={-21} interval={2000}/>
    </>
  );
};

export default App;