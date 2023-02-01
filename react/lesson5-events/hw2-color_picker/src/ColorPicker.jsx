import React, { Component } from 'react';

class ColorPicker extends Component {
  setTitle(color) {
    document.querySelector('.picker__title').textContent = color;
  }
  clearTitle() {
    document.querySelector('.picker__title').textContent = '';
  }

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseLeave={() => this.clearTitle()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseLeave={() => this.clearTitle()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseLeave={() => this.clearTitle()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;


// class ColorPicker extends Component {
//         constructor(props) {
//     super(props);
//     this.state = {
//       btnColor: '',
//     };
//   }
//   getColorName(color) {
//     const colorElement = document.querySelector('.picker__title');

//     this.setState({
//       btnColor: colorElement.textContent = color,
//     });
//   }

