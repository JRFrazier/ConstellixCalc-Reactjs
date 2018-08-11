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
    const number = num.length;
    const obj = {};
    obj[`check_${number}`] = {
      checkType: "HTTP",
      checkLocations: {
        United_States: { Toronto_Canada: false, New_York_NY: false },
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
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    console.log(newState);
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
            changeListener={value => this.handleChange(value)}
          />
        </div>
      </div>
    );
  }
}

export default SonarChecks;
