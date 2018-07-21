import React from 'react';
import SonarCheck from './sonar-check.js'

class SonarChecks extends React.Component {
    constructor(props) {
        super(props);
        this.addCheck = this.addCheck.bind(this);
        this.deleteCheck = this.deleteCheck.bind(this);
        this.state = {
          checks: []
        }
      }
      addCheck() {
        const num = this.state.checks[0] ? this.state.checks.concat(this.state.checks[this.state.checks.length - 1] + 1) : this.state.checks.concat(this.state.checks.length + 1);
        this.setState({checks: num});
        console.log(this.state.num);
      }
    
      deleteCheck(key) {
        const array = [...this.state.checks];
        const index = array.indexOf(key)
        array.splice(index, 1);
        this.setState({
            checks: array
          }); 
          console.log(this.state.checks)
      }
      
      render() {
        return (
            <div>
            <button onClick={() => {this.addCheck()}
            } type="button">Click Me</button>
            <div id="sonar-fields">
            <SonarCheck className={"sonar-calc"} delete={(key) => this.deleteCheck(key)} value={this.state.checks} />
            </div>
          </div>
        ) 
      }
}

export default SonarChecks;