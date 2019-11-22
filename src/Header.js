import React from 'react';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeDarkMode} from "./actions";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    changeDarkMode = () => {
        this.props.changeDarkMode();
    };

    render() {
        return <div className="header">
            <h1 className="title">IvanSey Landing Page</h1>
            <h3 className="desc">Это мой небольшой лендинг. Тут я опишу, чем я занимаюсь, с чем работаю.</h3>
            {
                this.props.appStateActive.darkMode === false
                    ? <a href="#" onClick={() => this.changeDarkMode()}>Включить тёмную тему</a>
                    : <a href="#" onClick={() => this.changeDarkMode()}>Включить светлую тему</a>
            }
            <div className="menu">
                <Link to="/">Обо мне</Link>
                <Link to="/example">Примеры работ</Link>
                <Link to="/reviews">Отзывы</Link>
            </div>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        appState: state.appState,
        appStateActive: state.appStateActive
    }
};

let matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeDarkMode: changeDarkMode
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
