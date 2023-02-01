import React, { Component } from 'react';
import Message from './Message';

const text1 = '1';
const text2 = '2';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }

  setText = text => {
    this.setState({
      text
    });
  }
render() {
return (
  <div className="page">
    <Message text={this.state.text}/>
    <div className="actions">
      <button className="btn" onClick={()=> this.setText(text1)}> text1</button>
      <button className="btn" onClick={()=> this.setText(text2)}> text2</button>
      <button className="btn" onClick={()=> this.setText('')}> Clear</button>
    </div>
  </div>
);

}
}

export default Page;