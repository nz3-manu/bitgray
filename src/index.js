import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap-css';
import Photo from "./components/Photo.js";
import Album from "./components/Album.js";

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Album}/>
        <Route path="/photo" component={Photo}/>
        <Route path="/photo/:id" component={Photo}/>
    </Route>
</Router>,
  document.getElementById('root')
);
