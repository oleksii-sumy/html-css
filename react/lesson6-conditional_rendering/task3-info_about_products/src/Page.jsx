import React, { Component } from 'react';
import Info from './Info';

const text1 = 'Price is 500$. Available in 2 colors';
const text2 = 'Price is 650$. Not available in 1 color';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    };
  }

  setInfo = info => {
    this.setState({
      info
    });
  }
render() {
return (
  <div className="page">
    <Info info={this.state.info}/>
    <div className="actions">
      <button className="btn" onClick={()=> this.setInfo(text1)}> IPhone 13</button>
      <button className="btn" onClick={()=> this.setInfo(text2)}> IPhone 13</button>
      <button className="btn" onClick={()=> this.setInfo('')}> Clear</button>
    </div>
  </div>
);

}
}

export default Page;