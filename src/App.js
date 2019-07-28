import React from 'react';
import Header from "./Header"
import About from "./About";
import Costs from "./Costs";
import StackFront from "./StackFront";
import StackBack from "./StackBack";
import Example from "./Example";
import Contact from "./Contact";
import Footer from "./Footer";
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
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

export default App;
