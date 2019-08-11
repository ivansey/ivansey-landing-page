import React from 'react';

class Technology extends React.Component {
    render() {
        let color;
        if(!this.props.color) { color = '#000' } else { color = this.props.color }
        return <div className="technology">
            <span className={'mdi mdi-' + this.props.icon} style={{color: color}}/>
            <h2 className="title">{this.props.title}</h2>
        </div>
    }
}

export default Technology;
