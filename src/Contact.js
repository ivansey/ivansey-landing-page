import React from 'react';

class Contact extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Связь со мной</h2>
            <div className="list">
                <a href="https://vk.com/ivansey2"><span className="mdi mdi-vk"/></a>
                <a href="mailto://van.secret2015@gmail.com"><span className="mdi mdi-at"/></a>
                <a href="https://teleg.run/ivansey"><span className="mdi mdi-telegram"/></a>
                <a href="https://github.com/ivansey"><span className="mdi mdi-github-circle"/></a>
            </div>
        </div>
    }
}

export default Contact;
