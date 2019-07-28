import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DoubleConnectedView from './exploration/double-connected-view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <DoubleConnectedView hprops={{ initial: { a: 'a', b: 'b' } }}/>
        </div>
      </div>
    );
  }
}

export default App;
