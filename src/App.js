import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Title text="123456"/>
    );
  }
}
const Title =  (props) => <h1> Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`Missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} is too short`)
    }
  }
}

export default App;
