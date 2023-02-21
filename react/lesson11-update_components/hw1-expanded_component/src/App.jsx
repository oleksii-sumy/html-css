import React from 'react';
import Expand from './Expand';


class App extends React.Component {
  state = {
    status: false,
  };
  HandleStatusContent = () => {
    this.state.status === true
      ? this.setState({
          status: false,
        })
      : this.setState({
          status: true,
        });
  };
  render() {
    return (
      <div className="app">
        <Expand title="Some title" onHandleContent={this.HandleStatusContent}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}
export default App;

      // <div className="app">
      //   <button className="btn" onClick={this.showDialog}>
      //     Show dialog
      //   </button>
      //   <Dialog onClose={this.hideDialog} isOpen={this.state.isOpen} title="Recommendation">
      //     <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
      //   </Dialog>
      // </div>
