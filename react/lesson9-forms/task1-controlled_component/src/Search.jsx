import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

search = event => {
  event.preventDefault();
alert(`Search text: ${this.state.value}`);
}
  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;