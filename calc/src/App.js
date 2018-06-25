import React, { Component } from 'react';
import './App.css';
import DnsCalc from './dns-calc'
import Tab from './tab.js'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      className: "inactive",
      value: [1,2],
    }
  }
  logThis(i) {
    const x = document.getElementById(i);
    console.log(x);
  }

  renderTab(i) {
    const num = i + 1
    return (
      <Tab 
        id={this.state.value[i]} 
        onClick={() => this.logThis(num)}
        className={this.state.className}
      />)
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Constellix</h1>
        </header>
        <div id="calc-main">
          {this.renderTab(0)}
          {this.renderTab(1)}
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
