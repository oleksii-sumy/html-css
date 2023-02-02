import React, {Component} from "react";
import Online from "./Online";
import Offline from "./Offline";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state={
      isOnline: true,
    }
  }

render() {
  let buttonStatus;
    if (this.state.isOnline) {
    buttonStatus = <Online currentStatus={this.handler} />; 
  } else {
    buttonStatus = <Offline currentStatus={this.handler}/>;
  }
    return (
      <div className="status">
        {buttonStatus}
      </div>
    );
}
}

export default Status;
