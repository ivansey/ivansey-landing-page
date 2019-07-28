import React from 'react';

class MiniHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    miniHeader = '';

    render() {
        if (this.props.status) {
            this.miniHeader = 'open'
        } else {
            this.miniHeader = '';
        }
        return <div className={ 'miniHeader ' + this.miniHeader }>
            <p className="">IvanSey</p>
            <button className="contact"><span className="mdi mdi-android-messages"/></button>
        </div>
    }
}

export default MiniHeader;
