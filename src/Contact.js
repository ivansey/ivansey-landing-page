import React from 'react';

class Contact extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Связь со мной</h2>
            <div className="list">
                <a href="https://vk.com/ivansey2">ВКонтакте</a>
                <a href="mailto://van.secret2015@gmail.com">E-Mail</a>
                <a href="https://teleg.run/ivansey">Telegram</a>
                <a href="https://github.com/ivansey">GitHub</a>
            </div>
        </div>
    }
}

export default Contact;
