import React, {Component} from 'react';

class Life extends Component {
constructor(props) {
  super(props);
  console.log('constructor: good place for create state')
}

componentDidMount() {
  console.log('componentDidMoun: API calls, subscriptions');
}
shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return nextProps.number % 2;
}
componentDidUpdate() {
      console.log('componentDidUpdate(prevProps, prevtState): some update based on new props');
}
componentWillUnmount() {
        console.log('componentWillUnmount: clean up before DOM related to component will be removed');

}
 render() {
  console.log('return React element to build DOM');
  return <div className='number'>{this.props.number}</div>
 }
}

export default Life;