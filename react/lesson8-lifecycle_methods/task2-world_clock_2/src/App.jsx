import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    visible: true,
  }
}

toggle = () => {
  this.setState({
    visible: !this.state.visible,
  })
}

render () {

    return (
      <>
          <button className="btn" onClick={this.toggle}>
            Toggle
          </button>
        <div className="container">
          <div>{this.state.visible && <Clock location={'London'} offset={0} />}</div>
          <div>{this.state.visible && <Clock location={'Kyiv'} offset={2} />}</div>
          <div>{this.state.visible && <Clock location={'New York'} offset={-5} />}</div>
        </div>
      </>
    );

}
  }


export default App;

