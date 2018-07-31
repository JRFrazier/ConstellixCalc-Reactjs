import React from "react";
import SonarChecks from "./sonar-checks.js";


class SonarCalc extends React.Component {

  render() {
    return  (
      <div className={this.props.className}>
        <SonarChecks allLocations={(i) => this.saveLocation(i)}/>
      </div>
  )
  }
}

export default SonarCalc;
