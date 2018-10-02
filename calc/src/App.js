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
        addusers: 0,
        sonar: 0
      },
      sonar: [],
      sonar_check: [],
      total: 0
    };
  }

  // Tab Selection
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
  //Deletes check from sonar in state
  deleteSonar(i) {
    const sonarState = this.state.sonar;
    sonarState.splice(i - 1, 1);
    this.setState({ sonar: sonarState });
  }

  renderTotal(i) {
    if (i[0] === "domains") {
      let price = 0;
      const domainCount = i[1];
      if (domainCount === 1) {
        price = 5;
      } else if (domainCount > 1 && domainCount < 26) {
        price = (domainCount - 1) * 0.5 + 5;
      } else {
        price = (domainCount - 26) * 0.095 + 17;
      }

      this.setState({
        ...this.state,
        dns: { ...this.state.dns, domains: price }
      });
    } else if (i[0] === "records") {
      let price = 0;
      if (i[1] > 100) {
        const recordTotal = i[1] / 100;
        console.log(recordTotal.toFixed());
        price = Math.floor(recordTotal) * 0.5;
      }
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, records: price }
      });
    } else if (i[0] === "queries") {
      let price = 0;
      if (i[1] > 0 && i[1] < 1000) {
        price = i[1] * 0.395;
      } else if (i[1] >= 1000) {
        price = (i[1] - 999) * 0.195 + 394.61;
      }
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, queries: price }
      });
    } else if (i[0] === "gtd") {
      let price = 0;
      if (i[1] === 1) {
        price = 5;
      } else if (i[1] > 1 && i[1] < 101) {
        price = (i[1] - 1) * 1 + 5;
      } else if (i[1] > 100) {
        price = (i[1] - 100) * 0.1 + 104;
      }
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, gtd: price }
      });
    } else if (i[0] === "geoprox") {
      const price = i[1] * 0.06;
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, geoprox: price }
      });
    } else if (i[0] === "ipfilter") {
      const price = i[1] * 0.06;
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, ipfilter: price }
      });
    } else if (i[0] === "aname") {
      const price = i[1] * 0.1;
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, aname: price }
      });
    } else if (i[0] === "addusers") {
      const price = i[1] * 2;
      this.setState({
        ...this.state,
        dns: { ...this.state.dns, addusers: price }
      });
    } else if (Object.keys(i[0])[0] === "check") {
      let cost = [];
      let index = 0;
      let checkTotal = [];

      i.map(x => {
        cost[index] = 0;
        let totalChecked = 0;
        const checkPolicy = x.check.checkPolicy;
        const checkAmount = x.check.checkAmount;

        //Check Location Objects
        const naObj = x.check.checkLocations.North_America;
        const euObj = x.check.checkLocations.Europe;
        const apObj = x.check.checkLocations.Asia_Pacific;
        const ocObj = x.check.checkLocations.Oceania;
        const protocol = x.check.checkType;

        // Runs if "Once Per Site" Check Policy is selected
        if (x.check.checkPolicy === "Once Per Site") {
          for (const key in naObj) {
            naObj[key] ? (totalChecked += 1) : (totalChecked += 0);
          }
          for (const key in euObj) {
            euObj[key] ? (totalChecked += 1) : (totalChecked += 0);
          }
          for (const key in apObj) {
            apObj[key] ? (totalChecked += 1) : (totalChecked += 0);
          }
          for (const key in ocObj) {
            ocObj[key] ? (totalChecked += 1) : (totalChecked += 0);
          }

          if (totalChecked > 0) {
            const multiplier = x.check.checkInterval / totalChecked;
            for (const key in naObj) {
              if (protocol === "HTTP") {
                naObj[key]
                  ? (cost[index] += 0.00004 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "HTTPS") {
                naObj[key]
                  ? (cost[index] += 0.00006 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "TCP") {
                naObj[key]
                  ? (cost[index] += 0.00002 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "DNS") {
                naObj[key]
                  ? (cost[index] += 0.00002 * multiplier)
                  : (cost[index] += 0);
              }
            }
            for (const key in euObj) {
              if (protocol === "HTTP") {
                euObj[key]
                  ? (cost[index] += 0.00004 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "HTTPS") {
                euObj[key]
                  ? (cost[index] += 0.00006 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "TCP") {
                euObj[key]
                  ? (cost[index] += 0.00002 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "DNS") {
                euObj[key]
                  ? (cost[index] += 0.00002 * multiplier)
                  : (cost[index] += 0);
              }
            }
            for (const key in apObj) {
              if (protocol === "HTTP") {
                apObj[key]
                  ? (cost[index] += 0.00006 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "HTTPS") {
                apObj[key]
                  ? (cost[index] += 0.00008 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "TCP") {
                apObj[key]
                  ? (cost[index] += 0.00003 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "DNS") {
                apObj[key]
                  ? (cost[index] += 0.00003 * multiplier)
                  : (cost[index] += 0);
              }
            }
            for (const key in ocObj) {
              if (protocol === "HTTP") {
                ocObj[key]
                  ? (cost[index] += 0.00008 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "HTTPS") {
                ocObj[key]
                  ? (cost[index] += 0.0001 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "TCP") {
                ocObj[key]
                  ? (cost[index] += 0.00003 * multiplier)
                  : (cost[index] += 0);
              } else if (protocol === "DNS") {
                ocObj[key]
                  ? (cost[index] += 0.00003 * multiplier)
                  : (cost[index] += 0);
              }
            }
          }
          //End of "Once Per Site"
        } else {
          //Runs if "Simultaneous" Check Policy is selected
          const checkInt = x.check.checkInterval;
          for (const key in naObj) {
            if (protocol === "HTTP") {
              naObj[key]
                ? (cost[index] += 0.00004 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "HTTPS") {
              naObj[key]
                ? (cost[index] += 0.00006 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "TCP") {
              naObj[key]
                ? (cost[index] += 0.00002 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "DNS") {
              naObj[key]
                ? (cost[index] += 0.00002 * checkInt)
                : (cost[index] += 0);
            }
            naObj[key] ? (totalChecked += 1) : (totalChecked += 0);
          }
          for (const key in euObj) {
            if (protocol === "HTTP") {
              euObj[key]
                ? (cost[index] += 0.00004 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "HTTPS") {
              euObj[key]
                ? (cost[index] += 0.00006 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "TCP") {
              euObj[key]
                ? (cost[index] += 0.00002 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "DNS") {
              euObj[key]
                ? (cost[index] += 0.00002 * checkInt)
                : (cost[index] += 0);
            }
            euObj[key] ? (totalChecked += 1) : (totalChecked += 0);
          }
          for (const key in apObj) {
            if (protocol === "HTTP") {
              apObj[key]
                ? (cost[index] += 0.00006 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "HTTPS") {
              apObj[key]
                ? (cost[index] += 0.00008 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "TCP") {
              apObj[key]
                ? (cost[index] += 0.00003 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "DNS") {
              apObj[key]
                ? (cost[index] += 0.00003 * checkInt)
                : (cost[index] += 0);
            }
            apObj[key] ? (totalChecked += 1) : (totalChecked += 0);
          }
          for (const key in ocObj) {
            if (protocol === "HTTP") {
              ocObj[key]
                ? (cost[index] += 0.00008 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "HTTPS") {
              ocObj[key]
                ? (cost[index] += 0.0001 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "TCP") {
              ocObj[key]
                ? (cost[index] += 0.00003 * checkInt)
                : (cost[index] += 0);
            } else if (protocol === "DNS") {
              ocObj[key]
                ? (cost[index] += 0.00003 * checkInt)
                : (cost[index] += 0);
            }
            ocObj[key] ? (totalChecked += 1) : (totalChecked += 0);
          }
          //End of "Simultaneous"
        } // else if ends

        checkTotal[index] = parseFloat(
          (cost[index] * x.check.checkAmount).toFixed(2)
        );

        // Updates sonar in state
        const sonarCost = this.state.sonar;
        sonarCost[index] = cost[index] * checkAmount;
        this.setState({ sonar: sonarCost });

        //Updates sonar_check in state
        const sonarCheck = this.state.sonar_check;
        sonarCheck[index] = i[index];
        this.setState({ sonar_check: sonarCheck });

        index += 1;
      });

      console.log(
        "this is the cost",
        cost,
        "this is i",
        i,
        "this is index",
        index,
        "this is checkTotal",
        checkTotal,
        "this is sonar State",
        this.state.sonar
      );
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
          <InfoBar dnsObj={this.state.dns} sonar={this.state.sonar} />
          <div className="calc-box">
            <div id="calcType">
              <DnsCalc
                className={dnsPage}
                getTotal={total => this.renderTotal(total)}
              />
              <SonarCalc
                className={sonarPage}
                getTotal={total => this.renderTotal(total)}
                deleteSonar={x => this.deleteSonar(x)}
              />
              <Monthly
                className={monthlyPage}
                obj={this.state.dns}
                sonarTotal={this.state.sonar}
                sonarCheck={this.state.sonar_check}
              />
            </div>
            <p className="App-intro" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
