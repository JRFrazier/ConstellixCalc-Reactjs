import React from "react";
import SonarCheck from "./sonar-check.js";

class SonarChecks extends React.Component {
  constructor(props) {
    super(props);
    this.addCheck = this.addCheck.bind(this);
    this.deleteCheck = this.deleteCheck.bind(this);
    this.state = {
      checks: [],
      check_type: "HTTP"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  addCheck() {
    const num = this.state.checks[0]
      ? this.state.checks.concat(
          this.state.checks[this.state.checks.length - 1] + 1
        )
      : this.state.checks.concat(this.state.checks.length + 1);
    this.setState({ checks: num });
    console.log(this.state.num);
  }

  deleteCheck(key) {
    const array = [...this.state.checks];
    const index = array.indexOf(key);
    array.splice(index, 1);
    this.setState({
      checks: array
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
            className={"sonar-calc"}
            delete={key => this.deleteCheck(key)}
            value={this.state.checks}
            check_type={this.state.check_type}
            changeListener={value => this.handleChange(value)}
          />
        </div>
      </div>
    );
  }
}

export default SonarChecks;
