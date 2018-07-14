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
      value: [1,2,3],
      calcPage: 1, 
      dns: {domains: 0, records: 0, gtd: 0}
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

  renderTotal(i) {
    if (i[0] === 'records'){
      this.state.dns.records = i[1]
    }
  }

  render() {
    let page;
    const calcPage = this.state.calcPage;
    const obj = {records: 1}

    if (calcPage === 1) {
      page = <Monthly obj={this.state.dns} />
    } else if (calcPage === 2) {
      page = <DnsCalc getTotal={(total) => this.renderTotal(total) }/>
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
            <p className="App-intro">
            </p>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
