import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {a: ''}
  }
  update() {
    this.setState({
      a: ReactDOM.findDOMNode(this.a).value,
      b: this.refs.b.value,
    })
  }
  render() {
    return (
      <div>
        <Input ref={commponent => this.a = commponent}
          update =  {this.update.bind(this)}
        />  {this.state.a}
        <hr />
        <input type='text' ref='b'
          onChange =  {this.update.bind(this)}
        />  {this.state.b}
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return <input type='text' onChange={this.props.update} />
  }
}

export default App;
