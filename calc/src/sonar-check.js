import React from "react";
class SonarCheck extends React.Component {
  render() {
    return (
      <div>
        {this.props.value.map(x => {
          return (
            <form key={x} onSubmit={event => event.preventDefault()} className={this.props.className}>
            <button onClick={() => this.props.delete(x)}>What the fuck</button>
              <label>Number Of Checks: </label>
              <input type="text" />
              <br />
              <select>
                <option value="HTTP">HTTP</option>
                <option value="HTTPS">DNS</option>
                <option value="TCP">TCP</option>
                <option value="DNS">DNS</option>
                <option value="Watterfall">Watterfall</option>
              </select>
              <p>Check Number:{x}</p>
            </form>
          );
        })}
      </div>
    );
  }
}

export default SonarCheck;
