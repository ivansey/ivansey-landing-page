import React from 'react';

class ExamplePost extends React.Component {
    render() {
        return <div className={'post'}>
            <p className="title">{this.props.title}</p>
            <p className="desc">{this.props.desc}</p>
            <p className="tags">{this.props.tags}</p>
            <a href={this.props.url} target="_blank">{this.props.urlTitle}</a>
        </div>
    }
}

export default ExamplePost;
