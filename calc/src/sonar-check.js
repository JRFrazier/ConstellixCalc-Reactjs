import React from 'react';
import DeleteButton from './delete-button';
class SonarCheck extends React.Component {
    render() {
      console.log(this.props.value)
      return (
        <div>{this.props.value.map((x) => {return (
          <form key={x} className={this.props.className}>
          <DeleteButton />
          <label>Number Of Checks: </label>
          <input type="text"/> 
          <br />
          <select>
            <option value="HTTP">HTTP</option> 
            <option value="HTTPS">DNS</option>
            <option value="TCP">TCP</option>
            <option value="DNS">DNS</option>
            <option value="Watterfall">Watterfall</option>
          </select>
        </form>
        )})}</div>
      )
    }
  }

  export default SonarCheck;