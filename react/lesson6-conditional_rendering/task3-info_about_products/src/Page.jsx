import React, { Component } from 'react';
import Info from './Info';

const text1 = 'IPhone 13 - Price is 500$. Available in 2 colors';
const text2 = 'Price is 650$. Not available';

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
    <Info text={this.state.text} />
    <div className="actions">
      <button className="btn" onClick={() => this.setText(text1)}>
        {' '}
        text1
      </button>
      <button className="btn" onClick={() => this.setText(text2)}>
        {' '}
        text2
      </button>
      <button className="btn" onClick={() => this.setText('')}>
        {' '}
        Clear
      </button>
    </div>
  </div>
);

}
}

export default Page;