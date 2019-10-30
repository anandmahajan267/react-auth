import React from 'react';
import Login from './login'
import Signup from './signup'
import {
    Switch,
    Route
} from "react-router-dom";




export default () => {
    return (
        <>
            <Switch>
                <Route path="/login" component={Login} exact></Route>
                <Route path="/signup" component={Signup} exact></Route>
            </Switch>
        </>
    );
}
