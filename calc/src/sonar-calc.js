import React from "react";
import SonarChecks from "./sonar-checks.js";


class SonarCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      http_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0
      },
      https_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0

      },
      ftp_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0
      },
      tcp_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0
      },
      dns_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0  
      }
    }
    }

    saveLocation(i) {
      console.log(i);
    }

  render() {
    return  (
      <div className={this.props.className}>
        <SonarChecks allLocations={(i) => this.saveLocation(i)}/>
      </div>
  )
  }
}

export default SonarCalc;
