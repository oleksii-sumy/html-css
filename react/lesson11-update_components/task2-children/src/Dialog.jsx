import React from "react";
// import PropTypes from 'prop-types';

const Dialog = ({isOpen, children, title, onClose}) => {

  if (!isOpen) {
    return null;
  }

  return (
  <div className="dialog">
    <div className="dialog__heading">
      <h4 className="dialog__title">{title}</h4>
      <button className="dialog__close-btn" onClick={onClose}>+</button>
    </div>
    <div className="dialog__content">
      {children}
    </div>
  </div>

  );

};

// Dialog.propTypes = {
//   isOpen: PropTypes.bool,
//   children: PropTypes.element.isRequired,
//   title: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
// };

// Dialog.defaultProps = {
//   isOpen: false,
//   title: '',
// };

export default Dialog;