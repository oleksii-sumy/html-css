import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class Userslist extends Component {
  state = {
    filter: "",
  };

  handleForm = event => {
        let { filter } = event.target;
        this.setState({
          filter,
        });

  };

  render() {
    let filtredList;
    if (!this.state.filter === "") {
      filtredList = this.props.users
        .filterText()
        .slice()
        .filter(text => text === 'filter');
    } else {
      filtredList = this.props.users;
    }
    return (
      <div>
        <div className="filter">
          <Filter filterText={this.state.filter} />
        </div>
        <ul className="users">
          {filtredList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Userslist;