import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state = {
    sorting: null,
  };
  toggleSorting =() => {
    const newSorting = this.state.sorting === 'asc'
    ? 'desc'
    : 'asc';
    this.setState({
      sorting: newSorting,
    });
  }

  render() {
    let userList;
    if(this.state.sorting) {
      userList = this.props.users.slice().sort((a,b) => this.state.sorting === 'asc' ? a.age -b.age : b.age - a.age);
    } else {
      userList = this.props.users;
    }
    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>

        <ul className="users">
          {userList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
