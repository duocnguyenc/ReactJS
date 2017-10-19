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
        <h1>Hello world! {this.state.txt} - {this.state.cat}</h1>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
      </div>
    );
  }
}

const Widget = (props) => <input type='text' onChange={props.update}/>
export default App;
  