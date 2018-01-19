import React from 'react'
// import { Router, Route, Redirect, browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import Container from '../../modules/Contact/containers/index'
import Home from '../../modules/Home/home'

const ContactRoute = () => (
    <Router>
        <div>
            <Route exact path="/" component={Container} />
            <Route path="/home" component={Home} />
            {/* <PrivateRoute path="/home" component={Home}/> */}
            <Redirect from="*" to="/" />
        </div>
    </Router>
)

export default ContactRoute