import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import SingUp from './signUp';
import {Route, Link, BrowserRouter as Router} from "react-router-dom";

const routing = (
<Router>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login}/>
        <Route path="/signUp" component={SingUp}/>

    </div>
</Router>
)


ReactDOM.render(routing, document.getElementById('root'));

