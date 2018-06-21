import React, { Component } from 'react';
import './App.css';
import DnsCalc from './dns-calc'
import Tab from './tab.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Constellix</h1>
        </header>
        <div id="calc-main">
          <Tab text="DNS" id="dns-button"/>
          <Tab text="Sonar" id="sonar-button"/>
          <div id="info-bar"><p>Place Holder</p></div>
          <div className="calc-box">
            <DnsCalc />
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
