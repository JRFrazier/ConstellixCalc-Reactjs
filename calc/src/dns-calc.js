import React from "react";

class DnsCalc extends React.Component {
    constructor() {
        super();
        //this.handleCahange = this.handleChange.bind(this);
        this.state={
            data:''
        }
    }

    someFunk(event) {
        const x = event.target.id;
        const y = event.target.value;
        const obj = [x, parseInt(y, 10)];
        this.props.getTotal(obj);
    }
    
  render() {
    return (
      <form className="dns-form">
        <label> Number of Domains: </label> 
        <input type="text" id="domains" onChange={(event) => this.someFunk(event)}/>
        <br />
       <label> Number of Records: </label> 
       <input type="text" id="records" onChange={(event) => this.someFunk(event)} />
        <br />
        <label> Queries Per Month: </label> 
        <input type="text" id="queries" onChange={(event) => this.someFunk(event)}/>
        <br />
        <label> GTD Enabled Domains: </label>
        <input type="text" id="gtd" onChange={(event) => this.someFunk(event)}/>
        <br />
       <label> Geo Proximity: </label>
       <input type="text" id="geoprox" onChange={(event) => this.someFunk(event)}/>
        <br />
       <label> IP Filters: </label>
       <input type="text" id="ipfilter" onChange={(event) => this.someFunk(event)}/>
        <br />
       <label> ANAME Records: </label>
       <input type="text" id="aname" onChange={(event) => this.someFunk(event)}/>
        <br />
       <label> Additional User Accounts: </label>
       <input type="text" id="adduser" onChange={(event) => this.someFunk(event)}/>
      </form>
    );
  }
}

export default DnsCalc;
