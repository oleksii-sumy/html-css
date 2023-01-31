import React from 'react';

class GoodButton extends React.Component {
  handleClick(e) {
    alert(e.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}
 export default GoodButton;