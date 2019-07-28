import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Example1 from './core/examples/Example1';
// import Example2 from './core/examples/Example2';
// import Example3 from './core/examples/Example3';

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
          {/* <Example1 level={1} />
          <Example2 />
          <Example3 /> */}
          <DoubleConnectedView hprops={{ initial: { a: 'a', b: 'b' } }}/>
        </div>
      </div>
    );
  }
}

export default App;
