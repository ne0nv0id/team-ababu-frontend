import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import Faq from './Faq'
import Landing from './Landing'

class Nav extends Component{
    render(){
        return(
            <Router>
                <div className="navbar navbar-expand-lg">
                    <ul className="nav nav-tabs">
                        <li>
                            <Link className="btn btn-danger" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="btn btn-danger" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="btn btn-danger" to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className="btn btn-danger" to="/faq">FAQ</Link>
                        </li>
                    </ul>
                </div>

                <div className="container-fluid content-section">
                    <Route path="/" exact component={Landing}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/faq" exact component={Faq}/>
                </div>
            </Router>
        )
    }
}

export default Nav
