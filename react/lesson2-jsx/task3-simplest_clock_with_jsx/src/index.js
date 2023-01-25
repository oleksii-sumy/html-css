import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const renderSecond = time => {
  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';

  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';
  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="second" style={styles}>
      {seconds}
    </div>
  );
  ReactDOM.render(element, rootElement);
}

renderSecond(new Date());

setInterval(()=> renderSecond(new Date(), 1000));