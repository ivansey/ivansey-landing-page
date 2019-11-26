import React from 'react';
import Header from "./Header"
import About from "./About";
import Example from "./Example";
import Contact from "./Contact";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Login from "./Login";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import './fonts/googleSans/style.css';
import './App.css';
import '@mdi/font/css/materialdesignicons.min.css'
import MetaTags from "react-meta-tags";


class App extends React.Component {
    render() {
        return (
            <div className={this.props.appStateActive.darkMode === false ? "App" : "App dark"}>
                <BrowserRouter>
                    <Header/>
                    <MetaTags>
                        <meta name="theme-color"
                              content={this.props.appStateActive.darkMode === false ? "#fff" : "#000"}/>
                    </MetaTags>
                    <Route exact path="/" component={About}/>
                    <Route path="/example" component={Example}/>
                    <Route path="/reviews" component={Reviews}/>
                    <Route path="/admin/login" component={Login}/>
                </BrowserRouter>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        appState: state.appState,
        appStateActive: state.appStateActive
    }
};

export default connect(mapStateToProps)(App);
