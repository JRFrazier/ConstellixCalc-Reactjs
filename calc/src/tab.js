import React from 'react';

class Tab extends React.Component {
    render() {
        return (
            <button 
                id={this.props.id}
                className={this.props.className}
                onClick={() => this.props.onClick()}
            >
            Testing
            </button>)
                
        
    }
}

export default Tab; 