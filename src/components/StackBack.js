import React from 'react';
import Technology from "../pages/Technology";

class StackBack extends React.Component {
    render() {
        return <div className="page">
            <h2 className="title">Стек технологий серверной части</h2>
            <h3 className="subtitle">Так же я занимаюсь созданием сервисов, API, и различным бекэнд частью для сайта. ВОт список технологий:</h3>
            <div className="wrap">
                <Technology icon="nodejs" title="NodeJS" color="#81C784"/>
                <Technology icon="language-php" title="PHP" color="#9575CD"/>
                <Technology icon="database" title="MySQL/MariaDB и MongoDB"/>
                <Technology icon="json" title="API"/>
                <Technology icon="code-braces" title="ООП и паттерн MVC"/>
                <Technology icon="server" title="Настройка сервера на Linux"/>
            </div>
        </div>
    }
}

export default StackBack;
