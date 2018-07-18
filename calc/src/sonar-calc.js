import React from "react";

class SonarElement extends React.Component {
  render() {
    const listFields = this.props.sonarFields[0]
    return (
      <div>{this.props.sonarFields.sonarArr[0]} </div>
    )
  }
}

class SonarCalc extends React.Component {
  RenderNew() {
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
  }
  render() {
    let sonarArr = [newEl];
    const newEl = (
      <form  className={this.props.className}> 
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

    return (
      <div className={this.props.className}>
        <button onClick={sonarArr.push(newEl)} type="button">Click Me</button>
        <div id="sonar-fields">
        <SonarElement sonarFields={sonarArr} />
        </div>
      </div>
    ) 
  }
}

export default SonarCalc;
