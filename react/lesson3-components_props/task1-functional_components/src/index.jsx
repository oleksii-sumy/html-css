import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';

const rootElement = document.querySelector('#root');

const Search = (props) => {
  return (
    <div className="search">
      <h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
      <div className="search__field">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};
ReactDOM.render(<Search name="Tom" />, rootElement);
