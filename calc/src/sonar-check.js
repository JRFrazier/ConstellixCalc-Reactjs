import React from "react";
import ReactModal from "react-modal";

//Model Element
ReactModal.setAppElement("#root");

class SonarCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      na_eu: 0,
      ap: 0,
      oc: 0,
      defaultChecked_US_MI: false,
      defaultChecked_US_NJ: false,
      defaultChecked_US_GA: false,
      defaultChecked_US_DC: false,
      defaultChecked_US_NY: false,
      defaultChecked_US_CA: false,
      defaultChecked_US_WA: false,
      defaultChecked_US_IL: false,
      defaultChecked_US_TX: false,
      defaultChecked_CA: false,
      defaultChecked_EU_UK: false,
      defaultChecked_EU_IT: false,
      defaultChecked_EU_DEN: false,
      defaultChecked_EU_DE: false,
      defaultChecked_EU_AM: false,
      defaultChecked_EU_FR: false,
      defaultChecked_EU_AS: false,
      defaultChecked_AP_SI: false,
      defaultChecked_AP_IN: false,
      defaultChecked_AP_JP: false,
      defaultChecked_OC_NZ: false,
      defaultChecked_OC_AU: false,
      http: false,
      https: false,
      tcp: false,
      dns: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
    console.log(this.state.http_locations);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    console.log(this.state);
  }

  handleChange(event) {
    const checkId = `defaultChecked_${event.target.id}`;
    const checkClass = event.target.className;
    const newState = {};
    if (event.target.checked === true) {
      const num = this.state[checkClass] + 1;
      const checkState = {};
      checkState[checkClass] = num;
      this.setState(checkState);
      newState[checkId] = true;
      this.setState(newState);
    } else {
      const num = this.state[checkClass] - 1;
      const checkState = {};
      checkState[checkClass] = num;
      this.setState(checkState);
      newState[checkId] = false;
      this.setState(newState);
    }
    console.log(event.target.checked);
  }

  render() {
    return (
      <div>
        {this.props.value.map(x => {
          return (
            <form
              key={x}
              onSubmit={event => event.preventDefault()}
              className={this.props.className}
            >
              <button onClick={() => this.props.delete(x)}>Delete</button>
              <span className="flag-icon flag-icon-gr">Flag</span>
              <label>Number Of Checks: </label>
              <input
                type="text"
                onChange={event => console.log(event.target.value)}
              />
              <label>Check Type</label>
              <select>
                <option value="HTTP">HTTP</option>
                <option value="HTTPS">DNS</option>
                <option value="TCP">TCP</option>
                <option value="DNS">DNS</option>
                <option value="Watterfall">Watterfall</option>
              </select>
              <label>Check Policy</label>
              <select>
                <option value="Simultaneous">Simultaneous</option>
                <option value="Once Per Site">Once Per Site</option>
              </select>
              <label>Monitoring Locations</label>
              <button onClick={this.handleOpenModal}>Trigger Modal</button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}
              >
                <p>Modal text!</p>
                <button onClick={this.handleCloseModal}>Close Modal</button>
                <div id="us_monitors">
                  <h2>US Monitors</h2>
                  <label>Toronto, Canada</label>
                  <input
                    className="na_eu"
                    id="CA"
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_CA}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>New York</label>
                  <input
                    className="na_eu"
                    id="US_NY"
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_NY}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>New Jersey</label>
                  <input
                    className="na_eu"
                    id="US_NJ"
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_NJ}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Washington DC</label>
                  <input
                    className="na_eu"
                    id="US_DC"
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_DC}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Georgia</label>
                  <input
                    className="na_eu"
                    id="US_MI"
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_GA}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Miami Fl</label>
                  <input
                    className="na_eu"
                    id="US_MI"
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_MI}
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div id="eu_monitors">
                  <h2>Europe Monitors</h2>
                  <label>UK</label>
                  <input
                    className="na_eu"
                    id="UK"
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_UK}
                    onChange={event => this.handleChange(event)}
                  />
                </div>
              </ReactModal>
              <p>Check Number:{x}</p>
            </form>
          );
        })}
      </div>
    );
  }
}

export default SonarCheck;
