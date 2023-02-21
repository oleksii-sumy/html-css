import React, { Children } from "react";

const Expand = ({ title, children, onHandleContent }) => {
  let iconArrow;
  let content;
  if (!onHandleContent) {
    iconArrow = <i className="fas fa-chevron-down"></i>;
    content = null;
  } else {
    iconArrow = <i className="fas fa-chevron-up"></i>;
    content = <div className="expand__content">{children}</div>;
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onHandleContent}>
          {iconArrow}
        </button>
      </div>
      {content}
    </div>
  );
};

export default Expand;

{/* <i class="fa-solid fa-chevron-down"></i>; */}