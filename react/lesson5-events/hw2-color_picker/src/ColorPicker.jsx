import React, { Component } from 'react';

class ColorPicker extends Component {
  getColorName(color) {
    const colorElement = document.querySelector('.picker__title');
    colorElement.textContent = color;
  }

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.getColorName('Coral')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.getColorName('Aqua')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.getColorName('Bisque')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
