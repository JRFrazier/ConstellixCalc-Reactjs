import React from "react";
import DnsCalc from "./dns-calc.js";

class Monthly extends React.Component {
  render() {
    return <h2 className={this.props.className}> {this.props.obj.records} </h2>;
  }
}

export default Monthly;
