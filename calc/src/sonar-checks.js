import React from "react";
import SonarCheck from "./sonar-check.js";

class SonarChecks extends React.Component {
  constructor(props) {
    super(props);
    this.addCheck = this.addCheck.bind(this);
    this.deleteCheck = this.deleteCheck.bind(this);
    this.state = {
      check_number: [],
      checks: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  addCheck() {
    const num = this.state.check_number[0]
      ? this.state.check_number.concat(
          this.state.check_number[this.state.check_number.length - 1] + 1
        )
      : this.state.check_number.concat(this.state.check_number.length + 1);

    /*this.state.checks[0] 
        ? this.state.checks.concat(
          this.state.checks[this.state.checks.length - 1] = obj
          )
        : this.state.checks.concat(obj)*/
    const obj = {};
    obj["check"] = {
      checkNumber: num.length,
      checkType: "HTTP",
      checkLocations: {
        North_America: {
          Toronto_Canada: false,
          New_York_NY: false,
          Newark_NJ: false,
          Chicago_IL: false,
          Washington_DC: false,
          Atlanta_GA: false,
          Miami_FL: false,
          Dallas_TX: false,
          Seattle_WA: false,
          Fremont_CA: false,
          San_Francisco_CA: false,
          Los_Angeles_CA: false,
          San_Jose_CA: false
        },
        Europe: { London_Great_Britain: false },
        Asia_Pacific: { Hong_Kong: false },
        Oceania: { Sydney_Australia: false }
      }
    };
    const check = this.state.checks.concat(obj);
    this.setState({ check_number: num });
    this.setState({ checks: check });
    console.log(this.state);
  }

  deleteCheck(key) {
    const array = [...this.state.check_number];
    const index = array.indexOf(key);
    array.splice(index, 1);
    this.setState({
      check_number: array
    });
    console.log(key);
  }

  handleChange(event) {
    //Check Locations
    const x = this.state.checks;
    const obj = {};
    obj["checks"] = x;
    const checks = obj["checks"];
    let a = Object.assign({}, checks[0]);
    a["check"]["checkLocations"]["North_America"]["Toronto_Canada"] = true;
    this.setState(obj);
    //above need fixen :/
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.addCheck();
          }}
          type="button"
        >
          Click Me
        </button>
        <div id="sonar-fields">
          <SonarCheck
            theState={this.state}
            className={"sonar-calc"}
            delete={key => this.deleteCheck(key)}
            value={this.state.check_number}
            check_type={this.state.check_type}
            changeListener={(x, y) => this.handleChange(x, y)}
          />
        </div>
      </div>
    );
  }
}

export default SonarChecks;
