import React from "react";

class SonarElement extends React.Component {
  render() {
    console.log(this.props.value)
    return (
      <div>{this.props.value.map((x) => {return (
        <form key={x} className={this.props.className}> 
        <button id="sonar-delete">delete</button>
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
      )})}</div>
    )
  }
}

class SonarCalc extends React.Component {
  constructor(props) {
    super(props);
    this.addFoo = this.addFoo.bind(this);
    this.state = {
      foo: []
    }
  }
  addFoo() {
    const foo = this.state.foo.concat(this.state.foo.length + 1);
    this.setState({foo: foo});
    console.log(this.state.foo);
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
        <button onClick={() => {this.addFoo()}
        } type="button">Click Me</button>
        <div id="sonar-fields">
        <SonarElement className={"sonar-calc"} value={this.state.foo} />
        </div>
      </div>
    ) 
  }
}

export default SonarCalc;
