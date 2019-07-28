import React from 'react';

class Header extends React.Component {
    render() {
        return <div className="header">
            <h1 className="title">IvanSey Landing Page</h1>
            <h3 className="desc">Это мой небольшой лендинг. Тут я опишу, чем я занимаюсь, с чем работаю.</h3>
            <a href="http://ivansey.ru">Открыть мой блог</a>
        </div>
    }
}

export default Header;
