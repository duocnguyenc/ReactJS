import React, { Component } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "This is state txt of Duoc",
      cat: 0
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.update.bind(this)}/>
        <h1>Hello world! {this.state.txt} - {this.state.cat}</h1>
      </div>
    );
  }
}

export default App;
  