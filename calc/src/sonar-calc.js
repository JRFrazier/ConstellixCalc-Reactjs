import React from "react";
import SonarCheck from "./sonar-check.js";


class SonarCalc extends React.Component {
  constructor(props) {
    super(props);
    this.addCheck = this.addCheck.bind(this);
    this.deleteCheck = this.deleteCheck.bind(this);
    this.state = {
      checks: []
    }
  }
  addCheck() {
    const num = this.state.checks.concat(this.state.checks.length + 1);
    this.setState({checks: num});
    console.log(this.state.num);
  }

  deleteCheck() {
    console.log("Deleted");
  }
  /*RenderNew() {
    const newEl = (
      <form className={this.props.className}> 
        <label>Number Of Checks: </label>
        <input type="text"/> 
        <br />
        <select>
          <option value="HTTP">HTTP</option> 
          <option value="HTTPS">DNS</option>
          <option value="TCP">TCP</option>
          <option value="DNS">DNS</option>
          <option value="Watterfall">Watterfall</option>
        </select>
      </form>
    )
    return newEl
  }*/
  render() {
    return (
      <div className={this.props.className}>
        <button onClick={() => {this.addCheck()}
        } type="button">Click Me</button>
        <div id="sonar-fields">
        <SonarCheck className={"sonar-calc"} value={this.state.checks} />
        </div>
      </div>
    ) 
  }
}

export default SonarCalc;
