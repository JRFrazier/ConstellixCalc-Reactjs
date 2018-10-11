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
      checkKey: Math.floor(Math.random() * 100),
      checkAmount: 1,
      checkType: "HTTP",
      checkPolicy: "Simultaneous",
      checkInterval: 86400,
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
        Europe: {
          London_UK: false,
          Frankfurt_DE: false
        },
        Asia_Pacific: {
          Hong_Kong: false,
          Tokyo_JP: false,
          Singapore_SG: false,
          Banglore_IN: false,
          Chennai_IN: false
        },
        Oceania: { Sydney_AU: false, Adelaide_AU: false, Aukland_NZ: false }
      }
    };
    const check = this.state.checks.concat(obj);
    this.setState({ check_number: num });
    this.setState({ checks: check });
  }

  calcTotal() {
    this.props.getTotal(this.state.checks);
  }

  deleteCheck(key) {
    //Remove index from check_number in state
    const array = [...this.state.check_number];
    array.pop();

    /*const array = this.state.check_number*/

    //Remove index from checks
    const checks = this.state.checks;
    checks.splice(key - 1, 1);

    this.setState({
      check_number: array,
      checks: checks
    });

    this.props.deleteSonar(key);
    console.log("array", array, "checks", checks, "key", key);
  }

  handleChange(event, number) {
    if (event.target.id === "check_type") {
      const x = this.state.checks;
      const obj = {};
      obj["checks"] = x;
      const checks = obj["checks"];
      let y = Object.assign({}, checks[number - 1]);
      y["check"]["checkType"] = event.target.value;
      this.setState(obj);
    } else if (event.target.id === "check_policy") {
      const x = this.state.checks;
      const obj = {};
      obj["checks"] = x;
      const checks = obj["checks"];
      let y = Object.assign({}, checks[number - 1]);
      y["check"]["checkPolicy"] = event.target.value;
      this.setState(obj);
    } else if (event.target.id === "check_amount") {
      const x = this.state.checks;
      const obj = {};
      obj["checks"] = x;
      const checks = obj["checks"];
      let y = Object.assign({}, checks[number - 1]);
      let val = !parseInt(event.target.value)
        ? ""
        : parseInt(event.target.value);
      y["check"]["checkAmount"] = val;
      this.setState(obj);
      console.log("this is it", event.target.value);
    } else if (event.target.id === "check_int") {
      const x = this.state.checks;
      const obj = {};
      obj["checks"] = x;
      const checks = obj["checks"];
      let y = Object.assign({}, checks[number - 1]);
      let val = parseInt(event.target.value);
      y["check"]["checkInterval"] = val;
      this.setState(obj);
    } else {
      //Check Locations
      const check = this.state.checks[number - 1].check.checkLocations[
        event.target.className
      ][event.target.id];
      if (check === true) {
        const x = this.state.checks;
        const obj = {};
        obj["checks"] = x;
        const checks = obj["checks"];
        let a = Object.assign({}, checks[number - 1]);
        a["check"]["checkLocations"][event.target.className][
          event.target.id
        ] = false;
        this.setState(obj);
      } else {
        const x = this.state.checks;
        const obj = {};
        obj["checks"] = x;
        const checks = obj["checks"];
        let a = Object.assign({}, checks[number - 1]);
        a["check"]["checkLocations"][event.target.className][
          event.target.id
        ] = true;
        this.setState(obj);
      }
    }
    this.props.getTotal(this.state.checks);
    console.log(event.target.id, number);
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
            changeListener={(x, y) => this.handleChange(x, y)}
          />
        </div>
      </div>
    );
  }
}

export default SonarChecks;
