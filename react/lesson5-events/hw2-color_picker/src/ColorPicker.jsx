import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  setTitle(color) {
    this.setState({
      color: (document.querySelector('.picker__title').textContent = color),
    });
  }
  clearTitle() {
    this.setState({
      color: (document.querySelector('.picker__title').textContent = ''),
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title"> {this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseLeave={() => this.clearTitle()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setTitle('Aqua')}
            onMouseLeave={() => this.clearTitle()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setTitle('Bisque')}
            onMouseLeave={() => this.clearTitle()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

