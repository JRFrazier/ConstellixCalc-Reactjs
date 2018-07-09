import React from "react";

class DnsCalc extends React.Component {
  render() {
    return (
      <form className="dns-form">
        <label> Number of Domains: </label> 
        <input type="text" />
        <br />
       <label> Number of Records: </label> 
       <input type="text" />
        <br />
        <label> Queries Per Month: </label> 
        <input type="text" />
        <br />
        <label> GTD Enabled Domains: </label>
        <input type="text" />
        <br />
       <label> Geo Proximity: </label>
       <input type="text" />
        <br />
       <label> IP Filters: </label>
       <input type="text" />
        <br />
       <label> ANAME Records: </label>
       <input type="text" />
        <br />
       <label> Additional User Accounts: </label>
       <input type="text" />
      </form>
    );
  }
}

export default DnsCalc;
