import React, {Component} from 'react';

class Filter extends Component {
  state = {
    value: props.filterText,
  };

  handleInput = event => {
    this.props.handleForm(this.state)
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.value}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}


export default Filter;
