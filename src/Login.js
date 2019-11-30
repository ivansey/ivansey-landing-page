import React from "react";
import axios from "axios";
import cookies from "react-cookies";
import {Redirect} from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pass: "",
            response: null
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.login = this.login.bind(this);
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value});
    };

    handlePass = (e) => {
        this.setState({pass: e.target.value});
    };

    login = () => {
        axios.post("/api/v1/users/login", {
            email: this.state.email,
            pass: this.state.pass
        }).then((res) => {
            this.setState({response: res.data.response});
            if (res.data.response === "DONE") {
                cookies.save("token", res.data.token, {
                    path: "/"
                });
            }
        });
    };

    render() {
        return <div className="page">
            <h2 className="title">Админ-Панель - Вход</h2>
            <br/>
            <form>
                <input type="text" placeholder="Email" name="email" onChange={this.handleEmail}/>
                <input type="password" placeholder="Пароль" name="password" onChange={this.handlePass}/>
                <button type="button" onClick={this.login}>Вход</button>
                <br/>
                {
                    this.state.response === "DONE"
                        ? <div className="alert done">Вход выполнен <Redirect to="/admin/login/redirect"/></div>
                        : null
                }
                {
                    this.state.response === "USER_NOT_FOUND"
                        ? <div className="alert error">Пользователь не найден</div>
                        : null
                }
                {
                    this.state.response === "INVALID_PASSWORD"
                        ? <div className="alert error">Пароль не верен</div>
                        : null
                }
            </form>
        </div>
    }
}

export default Login;