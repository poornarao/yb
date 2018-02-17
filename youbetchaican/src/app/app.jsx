
import './styles/styles.less';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import Index from './pages/index/index.jsx';
import About from './pages/about/about.jsx';
import OurProducts from "./pages/our-products/our-products.jsx";
import ReachUs from "./pages/reach-us/reach-us.jsx";
import Services from "./pages/services/services.jsx";
import Counselings from "./pages/counselings/counselings.jsx";
import BrainIntegrations from "./pages/brain-integrations/brain-integrations.jsx";
import ClientHandouts from "./pages/client-handouts/client-handouts.jsx";

render(
    <Router history={Router.browserHistory}>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/our-products" component={OurProducts}/>
            <Route path="/reach-us" component={ReachUs}/>
            <Route path="/services" component={Services}/>
            <Route path="/counselings" component={Counselings}/>
            <Route path="/brain-integrations" component={BrainIntegrations}/>
            <Route path="/client-handouts" component={ClientHandouts}/>
            <Redirect to="/"/>
        </Switch>
    </Router>,
    document.getElementById('root')
);