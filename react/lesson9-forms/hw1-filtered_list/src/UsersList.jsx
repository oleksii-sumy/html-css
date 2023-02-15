import React, {Component} from "react";
import User from './User';
import Filter from "./Filter";

class UsersList extends Component {
  state = {
    filterText: '',
  };

  handleChange = event => {
    this.setState({
      filterText: event.target.value.toLowerCase(),
    });
  };

  render() {
    const { users } = this.props; //п3 таски
    const filtredUsers = users.filter(user => user.name.includes(this.state.filterText));

    return (
      <>
        <Filter
          filterText={this.state.filterText}
          onChange={this.handleChange}
          count={users.length}
        />

        <ul class="users">
          {filtredUsers.map(user => (
            <User name={user.name} age={user.age} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;