import React from 'react';
import Login from './Login';
import Dash from '../Drawer';
import { Route } from 'react-router-dom';

function Nav(props) {
    if (JSON.parse(localStorage.getItem("user"))) {
        return (
            <div>
                <Route exact path="/" component={Dash} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dash} />
            </div>
        );
    } else {
        return (
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dash} />
                <Route path="/login" component={Login} />
            </div>
        );
    }
}

export default Nav;