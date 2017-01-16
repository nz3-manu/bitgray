import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap-css';
import Photo from "./Photo.js";
import { Router, Route, hashHistory } from 'react-router';


ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="photo" component={Photo}/>
</Router>,
  document.getElementById('root')
);
