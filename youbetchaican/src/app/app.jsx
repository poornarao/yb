/**
 * Created by sasidhar on 09/11/17.
 */

import './styles/styles.less';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import Index from './pages/index/index.jsx';
import About from './pages/about/about.jsx';
import OurProducts from "./pages/our-products/our-products.jsx";
import ReachUs from "./pages/reach-us/reach-us.jsx";

render(
    <Router history={Router.browserHistory}>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/our-products" component={OurProducts}/>
            <Route path="/reach-us" component={ReachUs}/>
            <Redirect to="/"/>
        </Switch>
    </Router>,
    document.getElementById('root')
);