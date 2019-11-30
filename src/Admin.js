import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import axios from "axios";
import {checkToken} from "./actions/checkToken";
import cookies from "react-cookies";
import {Link} from "react-router-dom";


class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                _id: null,
                email: null
            },
            statusAdmin: false,
            response: "LOADING"
        };

        axios.post("/api/v1/users/admin/get", {token: cookies.load("token")}).then((res) => {
            console.log(res);
            if (res.data.response !== "NOT_ACCESS") {
                this.setState({userInfo: {_id: res.data.data._id, email: res.data.data.email}, statusAdmin: true, response: "OK"});
            } else {
                this.setState({response: "NOT_ACCESS"});
            }
        }).catch((e) => {
            console.error(e);
        });

        this.userInfo = this.userInfo.bind(this);
    }

    userInfo = () => {
        return <div>
            <p>{this.state.userInfo.email}</p>
        </div>
    };

    adminMenu = () => {
        return <div className="menuList">
            <Link>Управление технологиями</Link>
            <Link>Управление работами</Link>
            <Link>Управление отзывами</Link>
        </div>
    };

    render() {
        return <div className="page">
            <h2 className="title">Админ-Панель</h2>
            <br/>
            {
                this.state.response === "LOADING"
                    ? <p>Загрузка...</p>
                    : null
            }
            {
                this.state.response === "NOT_ACCESS"
                    ? <p>Нет доступа</p>
                    : null
            }
            {
                this.state.response === "OK"
                    ? this.userInfo()
                    : null
            }
            <br/>
            {
                this.state.statusAdmin === true
                    ? this.adminMenu()
                    : null
            }
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        appState: state.appState,
        appStateActive: state.appStateActive
    }
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        checkToken: checkToken
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);