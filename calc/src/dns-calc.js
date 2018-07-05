import React from "react";

class DnsCalc extends React.Component {
  render() {
    return (
      <form className="dns-form">
        Number of Domains: <input type="text" />
        <br />
        Number of Records: <input type="text" />
      </form>
    );
  }
}

export default DnsCalc;
