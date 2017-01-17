import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import {RouteTransition} from 'react-router-transition';

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <RouteTransition pathname={this.props.location.pathname}
                  atEnter={{
                    opacity: 0
                }} atLeave={{
                    opacity: 0
                }} atActive={{
                    opacity: 1
                }}>
                    {this.props.children}
                </RouteTransition>
                <Footer/>
            </div>

        );
    }
})

export default App;
