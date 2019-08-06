import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return <div className="header">
            <h1 className="title">IvanSey Landing Page</h1>
            <h3 className="desc">Это мой небольшой лендинг. Тут я опишу, чем я занимаюсь, с чем работаю.</h3>
            <div className="menu">
                <Link to="/">Обо мне</Link>
                <Link to="/example">Примеры работ</Link>
                <Link to="/reviews">Отзывы</Link>
            </div>
        </div>
    }
}

export default Header;
