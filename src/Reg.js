import React from "react";
import axios from "axios";
import cookies from "react-cookies";
import {Redirect} from "react-router-dom";


class Reg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pass: "",
            response: null
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.reg = this.reg.bind(this);
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value});
    };

    handlePass = (e) => {
        this.setState({pass: e.target.value});
    };

    reg = () => {
        axios.post("/api/v1/users/reg", {
            email: this.state.email,
            pass: this.state.pass
        }).then((res) => {
            this.setState({response: res.data.response});
            if (res.data.response === "DONE") {

            }
        });
    };

    render() {
        return <div className="page">
            <h2 className="title">Админ-Панель - Регистрация</h2>
            <br/>
            <form>
                <input type="text" placeholder="Email" name="email" onChange={this.handleEmail}/>
                <input type="password" placeholder="Пароль" name="password" onChange={this.handlePass}/>
                <button type="button" onClick={this.reg}>Регистрация</button>
                <br/>
                {
                    this.state.response === "DONE"
                        ? <div className="alert done">Регистрация выполнена <Redirect to="/admin/login"/></div>
                        : null
                }
                {
                    this.state.response === "EMAIL_NOT_FREE"
                        ? <div className="alert error">Email не свободен</div>
                        : null
                }
            </form>
        </div>
    }
}

export default Reg;