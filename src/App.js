import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Example1 from './core/examples/Example1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Example1 level={1} />
        </div>
      </div>
    );
  }
}

export default App;
