import React from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            black: true
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        this.setState({black: !this.state.black})
        console.log()
    }

    render() {
        let btn_class = this.state.black ? "inactive" : "active";

        return <button className={btn_class} onClick={this.changeColor} id={this.props.id}>{this.props.text}</button>
                
        
    }
}

export default Tab; 