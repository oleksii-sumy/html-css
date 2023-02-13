import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class Userslist extends Component {
  state = {
    filter: "",
  };

  handleForm = event => {
    event.preventDefault();
      const { value } = event.target;
    this.setState({
      value,
    });

  };

  render() {
    let filtredList;
    if (!this.state.filter === "") {
      filtredList = this.props.users
        .slice()
        .filter(text => text.name.includes('filter'));
    } else {
      filtredList = this.props.users;
    }
    return (
      <div>
        <Filter filterText="a" count={this.filtredList.length} onChange={this.handleForm}/>
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