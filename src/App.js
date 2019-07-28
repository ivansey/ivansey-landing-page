import React from 'react';
import Header from "./Header"
import About from "./About";
import Costs from "./Costs";
import StackFront from "./StackFront";
import StackBack from "./StackBack";
import Example from "./Example";
import Contact from "./Contact";
import Footer from "./Footer";
import MiniHeader from "./MiniHeader";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            miniHeader: false
        };
        this.updateClassHeader = this.updateClassHeader.bind(this);
    }

    static updateScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    updateClassHeader(val) {
        let scroll = App.updateScroll();
        if (scroll >= val) {
            this.setState({ miniHeader: true });
        } else {
            this.setState({ miniHeader: false });
        }
    }

    render() {
        setInterval(this.updateClassHeader, 100, 245);
        return (
            <div className="App">
                <Header/>
                <MiniHeader status={ this.state.miniHeader }/>
                <About/>
                <Costs/>
                <StackFront/>
                <StackBack/>
                <Example/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
