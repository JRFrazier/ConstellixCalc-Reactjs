import React from "react";

class InfoBar extends React.Component {
  render() {
    const values = Object.values(this.props.obj);
    const total = values.reduce((a, b) => {
      if (isNaN(a)) {
        a = 0;
      } else if (isNaN(b)) {
        b = 0;
      }
      return a + b;
    });
    return (
      <div id="info-bar">
        <h3> Monthly Total: {total} </h3>
      </div>
    );
  }
}

export default InfoBar;
