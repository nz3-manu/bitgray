import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";



var App = React.createClass({
    render: function() {
        return (
            <div>
              <Header/>
                {this.props.children}
              <Footer/>
            </div>

        );
    }
})

export default App;
