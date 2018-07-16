import React from "react";

class Monthly extends React.Component {
  render() {
    const domains = this.props.obj.domains ? this.props.obj.domains : 0;
    const records = this.props.obj.records ? this.props.obj.records : 0;
    const total = domains + records;
    return (
      <div className={this.props.className}>
        <div className="monthly-breakdown">
          <h3>
            Domains: {this.props.obj.domains ? this.props.obj.domains : 0}
          </h3>
          <h3>
            Records: {this.props.obj.records ? this.props.obj.records : 0}
          </h3>
          <h3>
            Queries: {this.props.obj.queries ? this.props.obj.queries : 0}
          </h3>
          <h3>GTD: {this.props.obj.gtd ? this.props.obj.gtd : 0}</h3>
          <h3>
            Geo Proximity: {this.props.obj.geoprox ? this.props.obj.geoprox : 0}
          </h3>
          <h3>
            IP Filters:{" "}
            {this.props.obj.ipfilters ? this.props.obj.ipfilters : 0}
          </h3>
          <h3>ANAME: {this.props.obj.aname ? this.props.obj.aname : 0}</h3>
          <h3>
            Additional Users:{" "}
            {this.props.obj.adduser ? this.props.obj.adduser : 0}
          </h3>
        </div>
      </div>
    );
  }
}

export default Monthly;
