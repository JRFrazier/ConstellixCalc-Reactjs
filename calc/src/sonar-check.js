import React from "react";
import ReactModal from "react-modal";

//Model Element
ReactModal.setAppElement('#root');

class SonarCheck extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      http_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0
      },
      https_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0

      },
      ftp_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0
      },
      tcp_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0
      },
      dns_locations: {
        na_eu: 0,
        ap: 0,
        oc: 0  
      }
    
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
    console.log(this.state.http_locations)
  }


  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    const element = document.getElementById('us-check');
    element.defaultChecked = element.checked
    this.handleTotal();
    this.setState({ showModal: false });
    console.log(element.checked)
  }

  handleChange(event) {
    if (event.target.id === "us-check") {
      this.setState({...this.state, http_locations: {...this.state.http_locations, na_eu: 1}})
    };
    console.log(event.target.checked);
  }

  modalExit(event) {
    const modal = document.getElementById('myModal');
    if (event === "Modal") {
      modal.style.display = "none";
    }
      console.log(event)
  }
  
  modalButton() {
    const modal = document.getElementById('myModal');

    modal.style.display = "block";
  }
  
  render() {
    return (
      <div>
        {this.props.value.map(x => {
          return (
            <form key={x} onSubmit={event => event.preventDefault()} className={this.props.className}>
            <button onClick={() => this.props.delete(x)}>Delete</button>
            <span className="flag-icon flag-icon-gr">Flag</span>
              <label>Number Of Checks: </label>
              <input type="text" onChange={event => console.log(event.target.value)}/>
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
          <label>USA</label>
          <input id="us-check" type="checkbox" defaultChecked="true" onChange={(event) => this.handleChange(event)}/>
          <label>UK</label>
          <input id="uk-check" type="checkbox"/>
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
