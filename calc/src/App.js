import React, { Component } from "react";
import "./App.css";
import DnsCalc from "./dns-calc.js";
import SonarCalc from "./sonar-calc.js";
import Monthly from "./monthly";
import Tab from "./tab.js";
import InfoBar from "./infobar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderTotal = this.renderTotal.bind(this);
    this.state = {
      value: [1, 2, 3],
      calcPage: 1,
      dns: {
        domains: 0,
        records: 0,
        queries: 0,
        gtd: 0,
        geoprox: 0,
        ipfilter: 0,
        aname: 0,
        addusers: 0
      },
      total: 0
    };
  }

  handleClick(i) {
    const x = document.getElementById(i);
    if (parseInt(x.id, 10) === 1 && x.className === "inactive") {
      return (
        (x.className = "active"),
        (document.getElementById(2).className = "inactive"),
        (document.getElementById(3).className = "inactive"),
        this.setState({ calcPage: 1 })
      );
    } else if (parseInt(x.id, 10) === 2 && x.className === "inactive") {
      return (
        (x.className = "active"),
        (document.getElementById(1).className = "inactive"),
        (document.getElementById(3).className = "inactive"),
        this.setState({ calcPage: 2 })
      );
    } else if (parseInt(x.id, 10) === 3 && x.className === "inactive") {
      return (
        (x.className = "active"),
        (document.getElementById(1).className = "inactive"),
        (document.getElementById(2).className = "inactive"),
        this.setState({ calcPage: 3 })
      );
    }
  }

  renderTab(i) {
    const num = i + 1;
    return (
      <Tab
        id={this.state.value[i]}
        onClick={() => this.handleClick(num)}
        className={this.state.className}
      />
    );
  }

  renderTotal(i) {
    if (i[0] === "domains") {
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, domains: i[1] }
      });
    } else if (i[0] === "records") {
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, records: i[1] }
      });
    } else if (i[0] === "queries") {
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, queries: i[1] }
      });
    } else if (i[0] === "gtd") {
    } else if (i[0] === "ipfilter") {
    } else if (i[0] === "aname") {
    } else {
    }
  }

  render() {
    let dnsPage = "invisible";
    let sonarPage = "invisible";
    let monthlyPage = "monthly";
    const calcPage = this.state.calcPage;

    if (calcPage === 1) {
      monthlyPage = "monthly"; //<Monthly obj={this.state.dns} />;
      dnsPage = "invisible";
      sonarPage = "invisible";
    } else if (calcPage === 2) {
      dnsPage = "dns-calc";
      monthlyPage = "invisible";
      sonarPage = "invisible";

      /*(
      
        <DnsCalc
          value={this.state.dns.records}
          getTotal={total => this.renderTotal(total)}
        />
      );*/
    } else if (calcPage === 3) {
      sonarPage = "sonarcalc"; //<SonarCalc />;
      dnsPage = "invisible";
      monthlyPage = "invisible";
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Constellix</h1>
        </header>
        <div id="calc-main">
          <Tab
            id={this.state.value[0]}
            onClick={() => this.handleClick(1)}
            className="active"
          />
          <Tab
            id={this.state.value[1]}
            onClick={() => this.handleClick(2)}
            className="inactive"
          />
          <Tab
            id={this.state.value[2]}
            onClick={() => this.handleClick(3)}
            className="inactive"
          />
          <InfoBar obj={this.state.dns} />
          <div className="calc-box">
            <div id="calcType">
              <DnsCalc
                className={dnsPage}
                getTotal={total => this.renderTotal(total)}
              />
              <SonarCalc className={sonarPage} />
              <Monthly className={monthlyPage} obj={this.state.dns} />
            </div>
            <p className="App-intro" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
