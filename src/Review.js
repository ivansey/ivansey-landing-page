import React from 'react';

class Review extends React.Component {
    render() {
        return <div className={'post'}>
            <p className="title">{this.props.title}</p>
            <p className="desc">{this.props.desc}</p>
            <br/>
            <p className="tags">{this.props.tags}</p>
        </div>
    }
}

export default Review;
