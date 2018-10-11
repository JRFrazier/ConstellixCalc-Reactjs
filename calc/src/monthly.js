import React from "react";

class Monthly extends React.Component {
  renderDomains() {
    const domains = this.props.obj.domains;
    console.log("DOMAINS!!!!!", domains);
    if (domains === 5) {
      return (
        <div id="domains">
          <h3>Domains:</h3>
          <p>1 Domain ..................................... $5</p>
          <h4>
            <u>Domains Total</u> = {parseFloat(domains).toFixed(2)}
          </h4>
        </div>
      );
    } else if (domains > 5 && domains < 17.01) {
      return (
        <div id="domains">
          <h3>Domains:</h3>
          <p>1 Domain ..................................... $5</p>
          <p>
            {(domains - 5) / 0.5} Domain/s .....................................
            ${domains - 5}
          </p>
          <h4>
            <u>Domains Total</u> = {parseFloat(domains).toFixed(2)}
          </h4>
        </div>
      );
    } else if (domains > 17) {
      return (
        <div id="domains">
          <h3>Domains:</h3>
          <p>1 Domain ..................................... $5</p>
          <p>25 Domain/s .................................... $12</p>
          <p>
            {((domains - 17) / 0.095).toFixed()} Domain/s
            ..................................... $
            {parseFloat(domains - 17).toFixed(2)}
          </p>
          <h4>
            <u>Domains Total</u> = {parseFloat(domains).toFixed(2)}
          </h4>
        </div>
      );
    }
  }

  renderSonar() {
    const sonar = this.props.sonarTotal;
    const sonarCheck = this.props.sonarCheck;
    let sonarChecks = 
    console.log("Monthly Sonar Check", sonarCheck);
    sonarCheck.map(x => {
      const checkType = x.check.checkType;
      const checkPolicy = x.check.checkPolicy;
      const checkLocations = x.check.checkLocations;
      const checkInterval = x.check.checkInterval;
      const checkAmount = x.check.checkAmount;
      if (checkType === "HTTP") {
        console.log("WWWWWWWWWWWTTTTTTTTTTFFFFFFFFFF", x.check.checkKey);
        sonarChecks = (<h3 key={x.check.checkKey}>Sonar Check .............. Total</h3>)
      }
    });
    return sonarChecks
  }
  render() {
    const domains = this.props.obj.domains ? this.props.obj.domains : 0;
    const records = this.props.obj.records ? this.props.obj.records : 0;
    const total = domains + records;
    return (
      <div className={this.props.className}>
        <div className="monthly-breakdown">
          {this.renderDomains()}
          <h3>
            Records: ${this.props.obj.records ? this.props.obj.records : 0}
          </h3>
          <h3>
            Queries: ${this.props.obj.queries ? this.props.obj.queries : 0}
          </h3>
          <h3>GTD: ${this.props.obj.gtd ? this.props.obj.gtd : 0}</h3>
          <h3>
            Geo Proximity: $
            {this.props.obj.geoprox ? this.props.obj.geoprox : 0}
          </h3>
          <h3>
            IP Filters: ${this.props.obj.ipfilter ? this.props.obj.ipfilter : 0}
          </h3>
          <h3>ANAME: ${this.props.obj.aname ? this.props.obj.aname : 0}</h3>
          <h3>
            Add Users: ${this.props.obj.addusers ? this.props.obj.addusers : 0}
          </h3>
          <h3>Sonar Monitoring Pricing:</h3>
          {this.renderSonar()}
        </div>
      </div>
    );
  }
}

export default Monthly;
