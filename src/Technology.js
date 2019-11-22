import React from 'react';
import {connect} from "react-redux";

class Technology extends React.Component {
    render() {
        let color;
        if(!this.props.color) { color = '#000' } else { color = this.props.color }
        return <div className="technology">
            <span className={'mdi mdi-' + this.props.icon} style={this.props.appStateActive.darkMode === false ? {color: color} : {color: "#fff"}}/>
            <h2 className="title">{this.props.title}</h2>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        appState: state.appState,
        appStateActive: state.appStateActive
    }
};

export default connect(mapStateToProps)(Technology);
