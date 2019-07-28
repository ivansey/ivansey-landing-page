import React from 'react';
import Header from "./Header"
import About from "./About";
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
      <StackFront/>
      <StackBack/>
      <Example/>
      <Contact/>
      <Footer/>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118751754-2"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-118751754-2');
        </script>
    </div>
  );
}

export default App;
