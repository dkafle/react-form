import React, { Component } from 'react';
import './App.css';

import TextInput from './components/TextInput';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TextInput
            validCheck={/^[A-Za-z0-9_.]+$/g}
            label="Name"
            name="username"
            placeholder="Please enter your name here"
            max="5"
          />
          <TextInput
            validCheck={/^[A-Za-z0-9_.]+$/g}
            label="Password"
            name="password"
            placeholder="Enter your password"
          />
      </div>
    );
  }
}

export default App;
