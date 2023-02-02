import React, {Component} from "react";
import Online from "./Online";
import Offline from "./Offline";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state={
      isOnline: false,
    }
  }

render() {
  let buttonStatus;
  if (this.state.isOnline) {
    buttonStatus= <Online /> 
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