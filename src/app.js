import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'

render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
