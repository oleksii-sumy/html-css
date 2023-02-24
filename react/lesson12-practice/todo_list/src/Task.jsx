import React from "react";

const Task = ({done, text, onChange, id, onDelete}) => {
  
  const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
  //   const listItemClasses = classNames('list-item', {'list-item_done': done});
  // if install npm i -S classnames and import classNames from 'classnames'

  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="listlist-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={()=> onDelete (id)}></button>
    </li>
  );
}

export default Task;