import React from 'react';
import Header from "./Header"
import About from "./About";
import Example from "./Example";
import Contact from "./Contact";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Login from "./Login";
import Admin from "./Admin";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import './fonts/googleSans/style.css';
import './App.css';
import '@mdi/font/css/materialdesignicons.min.css'
import MetaTags from "react-meta-tags";
import cookies from "react-cookies";
import {changeDarkMode} from "./actions";


class App extends React.Component {
    constructor(props) {
        super(props);

        if (cookies.load("darkMode") === "true") {
            this.props.changeDarkMode();
        }
    }

    render() {
        return (
            <div className={this.props.appStateActive.darkMode === false ? "App" : "App dark"}>
                <BrowserRouter>
                    <Header/>
                    <MetaTags>
                        <meta name="theme-color"
                              content={this.props.appStateActive.darkMode === false ? "#0078ff" : "#262627"}/>
                    </MetaTags>
                    <Route exact path="/" component={About}/>
                    <Route path="/example" component={Example}/>
                    <Route path="/reviews" component={Reviews}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route path="/admin/login" component={Login}/>
                    <Route path="/admin/login/redirect" component={() => {
                        window.location.href = "/admin";
                    }}/>
                </BrowserRouter>
                <Contact/>
                <Footer/>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
