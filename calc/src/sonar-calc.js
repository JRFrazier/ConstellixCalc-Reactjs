import React from "react";
import SonarChecks from "./sonar-checks.js";


class SonarCalc extends React.Component {
  constructor(props) {
    super(props);
    
    }

  render() {
    return  (
      <div className={this.props.className}>
        <SonarChecks />
      </div>
  )
  }
}

export default SonarCalc;
