import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    console.log('render');
    return (
      <button onClick={this.update}>{this.state.val}</button> 
    );
  }
  componentWillUnMount() {
    console.log('componentWillUnMount');
  }
}

class Wrapper extends Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
      </div>
    );
  }
}

export default Wrapper;
