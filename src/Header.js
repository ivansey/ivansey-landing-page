import React from 'react';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeDarkMode} from "./actions";
import axios from "axios";
import cookies from "react-cookies";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            statusAdmin: false
        };

        axios.post("/api/v1/users/admin/get", {token: cookies.load("token")}).then((res) => {
            if (res.data.response === "NOT_ACCESS") {
                this.setState({statusAdmin: false});
            } else if (res.data.response === "USER_FOUND") {
                this.setState({statusAdmin: true});
            }
        });
    }

    changeDarkMode = () => {
        this.props.changeDarkMode();
    };

    render() {
        console.log(this.props);
        return <div className="header">
            <h1 className="title">{"\< IvanSey Landing Page / >"}</h1>
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
                {
                    this.state.statusAdmin === true
                        ? <Link to="/admin">Админ-панель</Link>
                        : null
                }
            </div>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        appStateActive: state.appStateActive
    }
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeDarkMode: changeDarkMode
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
