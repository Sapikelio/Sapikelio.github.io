import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';
import NoMatch from './components/404';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route,Link, IndexRoute,IndexLink, hashHistory} from 'react-router';


const routes = (
    <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="projects" name="Example" component={Projects}/>
            <Route name="404: No Match for route" path="*" component={NoMatch}/>
    </Route>

);


ReactDOM.render( 
    <Router history={hashHistory} routes={routes}/>,
    document.getElementById('root'));
registerServiceWorker();
