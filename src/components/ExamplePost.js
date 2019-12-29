import React from 'react';

class ExamplePost extends React.Component {
    render() {
        return <div className={'post'}>
            <p className="title">{this.props.title}</p>
            <p className="desc">{this.props.desc}</p>
            <p className="tags">{this.props.tags}</p>
            <a href={this.props.url} target="_blank">{this.props.urlTitle}</a>
            {
              this.props.url2 !== ""
                ? <a href={this.props.url2} target="_blank">{this.props.urlTitle2}</a>
                : null
            }
            {
              this.props.url3 !== ""
                ? <a href={this.props.url3} target="_blank">{this.props.urlTitle3}</a>
                : null
            }
        </div>
    }
}

export default ExamplePost;
