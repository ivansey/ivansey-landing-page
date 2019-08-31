import React from 'react';
import Header from "./Header"
import About from "./About";
import Example from "./Example";
import Contact from "./Contact";
import Footer from "./Footer";
import Reviews from "./Reviews";
import {BrowserRouter, Route} from "react-router-dom";
import './fonts/googleSans/style.css';
import './App.css';

import {connect} from "react-redux";
import store from './store';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Route exact path="/" component={About}/>
                    <Route path="/example" component={Example}/>
                    <Route path="/reviews" component={Reviews}/>
                </BrowserRouter>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
