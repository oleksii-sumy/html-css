import React, {Component} from "react";
import Online from "./Online";
import Offline from "./Offline";

class Status extends Component {

render() {
  let buttonStatus;
  if (this.props.isOnline) {
    buttonStatus = <Online/>; 
  } else {
    buttonStatus = <Offline />;
  }
    return (
      <div className="status">
        {buttonStatus}
      </div>
    );
}
}

export default Status;