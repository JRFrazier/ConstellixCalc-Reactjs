import React, { Component } from 'react';
import './App.css';
import DnsCalc from './dns-calc.js'
import SonarCalc from './sonar-calc.js'
import Monthly from './monthly'
import Tab from './tab.js'

class App extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      className: "inactive",
      value: [1,2,3],
      calcPage: 1 
    }
  }

  handleClick(i) {
    const x = document.getElementById(i);
    if (parseInt(x.id, 10) === 1 && x.className === 'inactive') {
      return (
        x.className = 'active',
        document.getElementById(2).className = 'inactive',
        document.getElementById(3).className = 'inactive',
        this.setState({calcPage: 1})
      )
    } else if(parseInt(x.id, 10) === 2 && x.className === 'inactive') {
      return (
        x.className = 'active',
        document.getElementById(1).className = 'inactive',
        document.getElementById(3).className = 'inactive',
        this.setState({calcPage: 2})
      )
    } else if(parseInt(x.id, 10) === 3 && x.className === 'inactive') {
      return (
        x.className = 'active',
        document.getElementById(1).className = 'inactive',
        document.getElementById(2).className = 'inactive',
        this.setState({calcPage: 3})
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
    let page;
    const calcPage = this.state.calcPage;

    if (calcPage === 1) {
      page = <Monthly />
    } else if (calcPage === 2) {
      page = <DnsCalc />
    } else if (calcPage ===3) {
      page = <SonarCalc />
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Constellix</h1>
        </header>
        <div id="calc-main">
          <Tab id={this.state.value[0]} onClick={() => this.handleClick(1)} className="active" />
          <Tab id={this.state.value[1]} onClick={() => this.handleClick(2)} className="inactive" />
          <Tab id={this.state.value[2]} onClick={() => this.handleClick(3)} className="inactive" />
          <div id="info-bar"><p>Place Holder</p></div>
          <div className="calc-box">
            <div id="calcType">{page}</div>
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
