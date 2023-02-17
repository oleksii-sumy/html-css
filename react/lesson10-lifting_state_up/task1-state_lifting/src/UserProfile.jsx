import React from "react";

class UserProfile extends React.Component {

  render() {
if(!this.props.userData) {
  return null;
}
const {name, location, avatar_url} = this.props.userData;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user_info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;