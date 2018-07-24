import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LTrigger from './exp-001-logic-domain/lcomp/component-trigger';

let intI;

const dummyHefcMap = () => ({
  handleEnabled: (isEnabled) => {
    console.log('hefc handleEnabled:', isEnabled);
  },
  handleTriggered: () => {
    console.log('hefc handleTriggered.');
  },
});

const dummyRegr = (role, extI) => {
  extI.registerHefc(dummyHefcMap());
  // console.log('Register Interface from Parent Side for ', role, ' with ', extI);
  intI = extI;
}

const tester = () => {
  console.log('Testing:');
  intI.hefp.handleEnable(true);
  intI.hefp.handleTrigger();
  intI.hifp.isEnabled();
  intI.hifp.numberOfUpdate();
  console.log('Tested.');
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={tester}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LTrigger extRole='myTrigger' regr={dummyRegr} />
      </div>
    );
  }
}

export default App;
