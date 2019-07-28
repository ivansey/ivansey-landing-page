import React from 'react';

class Technology extends React.Component {
    render() {
        return <div className="technology">
            <h2 className={'mdi mdi-' + this.props.icon}/>
            <h2 className="title">{this.props.title}</h2>
        </div>
    }
}

export default Technology;
