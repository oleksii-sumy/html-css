import React from 'react';

const Filter = ({ count, filterText, onChange }) => (
  <div className="filter">
    <span className="filter__count">{count}</span>
    <input type="text" className="filter__input" value={filterText} onChange={onChange} />
  </div>
);

export default Filter;
