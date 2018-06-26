import React, { Component } from 'react';
import './App.css';
import DnsCalc from './dns-calc'
import SonarCalc from './sonar-calc'
import Tab from './tab.js'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      className: "inactive",
      value: [1,2],
    }
  }

  handleClick(i) {
    const x = document.getElementById(i);
    if (parseInt(x.id, 10) === 1 && x.className === 'inactive') {
      return (
        x.className = 'active',
        document.getElementById(2).className = 'inactive',
        console.log(document.getElementById('calcType'))
      )
    } else if(parseInt(x.id, 10) === 2 && x.className === 'inactive') {
      return (
        x.className = 'active',
        document.getElementById(1).className = 'inactive'
      )
    }
  }

  renderTab(i) {
    const num = i + 1
    return (
      <Tab 
        id={this.state.value[i]} 
        onClick={() => this.handleClick(num)}
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
            <div id="calcType">Place Holder</div>
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
