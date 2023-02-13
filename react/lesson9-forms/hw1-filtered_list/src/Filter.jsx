import React from 'react';

const Filter = props => {


  return <input type="text" className="filter__input" value={props.filter} onChange={props.handleForm}/>;
};

export default Filter;
