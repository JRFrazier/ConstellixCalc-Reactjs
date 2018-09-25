import React from "react";
import ReactModal from "react-modal";

//Model Element
ReactModal.setAppElement("#root");

class SonarLocations extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange(event) {
    this.props.changeListener(event);
  }

  Locations() {
    const obj = this.props.check["check"]["checkLocations"];

    const usLocations = [];
    const euLocations = [];
    const apLocations = [];
    const ocLocations = [];

    for (const key in obj) {
      if (key === "North_America") {
        const newObj = obj[key];
        for (const x in newObj) {
          const y = x.split("_");
          if (y.length > 2) {
            y.splice(2, 0, ", ");
            y.splice(1, 0, " ");
            usLocations.push(y.join(""));
          } else {
            usLocations.push(y.join(", "));
          }
        }
      } else if (key === "Europe") {
        const newObj = obj[key];
        for (const x in newObj) {
          const y = x.split("_");
          if (y.length > 2) {
            y.splice(2, 0, `,`);
            euLocations.push(y.join(" "));
          } else {
            euLocations.push(y.join(", "));
          }
        }
      } else if (key === "Asia_Pacific") {
        const newObj = obj[key];
        for (const x in newObj) {
          const y = x.split("_");
          if (y.length > 2) {
            y.splice(2, 0, `,`);
            apLocations.push(y.join(" "));
          } else {
            apLocations.push(y.join(", "));
          }
        }
      } else {
        const newObj = obj[key];
        for (const x in newObj) {
          const y = x.split("_");
          if (y.length > 2) {
            y.splice(2, 0, `,`);
            ocLocations.push(y.join(" "));
          } else {
            ocLocations.push(y.join(", "));
          }
        }
      }
    }
    return (
      <div>
        <h1>{this.props.modalId}</h1>
        <h3>North America</h3>
        {usLocations.map(x => {
          return (
            <div key={x}>
              <label>{x}</label>
              <input
                className="North_America"
                id={x.replace(/,/g, "").replace(/ /g, "_")}
                type="checkbox"
                defaultChecked={
                  this.props.checkState["check"]["checkLocations"][
                    "North_America"
                  ][
                    `${x
                      .split(",")
                      .join("")
                      .split(" ")
                      .join("_")}`
                  ]
                }
                onChange={event => this.handleChange(event)}
              />
            </div>
          );
        })}
        <h3>Europe</h3>
        {euLocations.map(x => {
          return (
            <div key={x}>
              <label>{x}</label>
              <input
                className="Europe"
                id={x.replace(/,/g, "").replace(/ /g, "_")}
                type="checkbox"
                defaultChecked={
                  this.props.checkState["check"]["checkLocations"]["Europe"][
                    `${x
                      .split(",")
                      .join("")
                      .split(" ")
                      .join("_")}`
                  ]
                }
                onChange={event => this.handleChange(event)}
              />
            </div>
          );
        })}
        <h3>Asia Pacific</h3>
        {apLocations.map(x => {
          return (
            <div key={x}>
              <label>{x}</label>
              <input
                className="Asia_Pacific"
                id={x.replace(/,/g, "").replace(/ /g, "_")}
                type="checkbox"
                defaultChecked={
                  this.props.checkState["check"]["checkLocations"][
                    "Asia_Pacific"
                  ][
                    `${x
                      .split(",")
                      .join("")
                      .split(" ")
                      .join("_")}`
                  ]
                }
                onChange={event => this.handleChange(event)}
              />
            </div>
          );
        })}
        <h3>Oceania</h3>
        {ocLocations.map(x => {
          return (
            <div key={x}>
              <label>{x}</label>
              <input
                className="Oceania"
                id={x.replace(/,/g, "").replace(/ /g, "_")}
                type="checkbox"
                defaultChecked={
                  this.props.checkState["check"]["checkLocations"]["Oceania"][
                    `${x
                      .split(",")
                      .join("")
                      .split(" ")
                      .join("_")}`
                  ]
                }
                onChange={event => this.handleChange(event)}
              />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return this.Locations();
  }
}

// Beginning of Sonar Check
class SonarCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      na_eu: 0,
      check_int: 0,
      modal_id: 0
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleOpenModal(event) {
    const modalId = event.target.id;
    this.setState({ showModal: true });
    //splitting up the state to grab the check locations state
    this.setState({ modal_id: modalId });
  }

  handleCloseModal(event) {
    this.setState({ showModal: false });
    console.log(this.props.theState);
  }

  //Check Location Handler
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
    console.log(checkId);
  }

  //Check Location handeler
  changeListener(event, number) {
    this.props.changeListener(event, number);
  }

  render() {
    return (
      <div>
        {this.props.value.map(x => {
          return (
            <form
              key={this.props.theState.checks[x - 1].check.checkKey}
              onSubmit={event => event.preventDefault()}
              className={this.props.className}
            >
              <button onClick={() => this.props.delete(x)}>Delete</button>
              <label>Number Of Checks: </label>
              <input
                type="number"
                id="check_amount"
                value={
                  !this.props.theState.checks[x - 1]
                    ? 0
                    : this.props.theState.checks[x - 1].check.checkAmount
                }
                onChange={event => {
                  this.props.changeListener(event, x);
                  console.log(this.state);
                }}
              />
              <label>Check Type</label>
              <select
                id="check_type"
                onChange={event => this.props.changeListener(event, x)}
              >
                <option value="HTTP">HTTP</option>
                <option value="HTTPS">HTTPS</option>
                <option value="TCP">TCP</option>
                <option value="DNS">DNS</option>
                <option value="Watterfall">Watterfall</option>
              </select>
              <label>Check Interval</label>
              <select
                id="check_int"
                onChange={event => this.props.changeListener(event, x)}
              >
                {/* Value is based on number of checks per month */}
                <option value="86400">30 Seconds</option>
                <option value="43200">60 Seconds</option>
                <option value="8640">5 Minutes</option>
                <option value="43200">10 Minutes</option>
                <option value="1400">30 Minutes</option>
                <option value="60">12 Hours</option>
                <option value="30">24 Hours</option>
              </select>
              <label>Check Policy</label>
              <select
                id="check_policy"
                onChange={event => this.props.changeListener(event, x)}
              >
                <option value="Simultaneous">Simultaneous</option>
                <option value="Once Per Site">Once Per Site</option>
              </select>
              <label>Monitoring Locations</label>
              <button id={x} onClick={this.handleOpenModal}>
                Trigger Modal
              </button>
              <ReactModal
                key={x}
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}
              >
                <p>Modal text!</p>
                <button onClick={this.handleCloseModal}>Close Modal</button>
                <SonarLocations
                  checkState={
                    this.props.theState.checks[this.state.modal_id - 1]
                  }
                  check={this.props.theState.checks[x - 1]}
                  changeListener={event =>
                    this.changeListener(event, this.state.modal_id)
                  }
                />

                {/* <div id="us_monitors">
                  <h3>US Monitors</h3>
                  <label>Toronto, Canada</label>
                  <input
                    className="na_eu"
                    id={`CA_${x}`}
                    type="checkbox"
                    onChange={event => {
                      this.handleChange(event);
                    }}
                  />
                  <label>New York</label>
                  <input
                    className="na_eu"
                    id={`US_NY_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_NY}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>New Jersey</label>
                  <input
                    className="na_eu"
                    id={`US_NJ_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_NJ}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Washington DC</label>
                  <input
                    className="na_eu"
                    id={`US_DC_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_DC}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Georgia</label>
                  <input
                    className="na_eu"
                    id={`US_MI_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_GA}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Miami Fl</label>
                  <input
                    className="na_eu"
                    id={`US_MI_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_US_MI}
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div id="eu_monitors">
                  <h3>Europe Monitors</h3>
                  <label>UK</label>
                  <input
                    className="na_eu"
                    id={`EU_UK_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_EU_UK}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Amsterdam</label>
                  <input
                    className="na_eu"
                    id={`EU_AM_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_EU_AM}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>France</label>
                  <input
                    className="na_eu"
                    id={`EU_FR_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_EU_FR}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Germany</label>
                  <input
                    className="na_eu"
                    id={`EU_DE_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_EU_DE}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Italy</label>
                  <input
                    className="na_eu"
                    id={`EU_IT_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_EU_IT}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Austria</label>
                  <input
                    className="na_eu"
                    id={`EU_AS_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_EU_AS}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Denmark</label>
                  <input
                    className="na_eu"
                    id={`EU_DEN_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_EU_DEN}
                    onChange={event => this.handleChange(event)}
                  />
                  <h3>Asia Pacific</h3>
                  <label>India</label>
                  <input
                    className="ap"
                    id={`AP_IN_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_AP_IN}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Hong Kong</label>
                  <input
                    className="ap"
                    id={`AP_HK_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_AP_HK}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Singapore</label>
                  <input
                    className="ap"
                    id={`AP_SI_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_AP_SI}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>Japan</label>
                  <input
                    className="ap"
                    id={`AP_JP_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_AP_JP}
                    onChange={event => this.handleChange(event)}
                  />
                  <h3>Oceania</h3>
                  <label>Australia</label>
                  <input
                    className="oc"
                    id={`OC_AU_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_OC_AU}
                    onChange={event => this.handleChange(event)}
                  />
                  <label>New Zealand</label>
                  <input
                    className="oc"
                    id={`OC_NZ_${x}`}
                    type="checkbox"
                    defaultChecked={this.state.defaultChecked_OC_NZ}
                    onChange={event => this.handleChange(event)}
                  />
                </div> */}
              </ReactModal>
              <p>
                Check Number:
                {x}
              </p>
            </form>
          );
        })}
      </div>
    );
  }
}

export default SonarCheck;
