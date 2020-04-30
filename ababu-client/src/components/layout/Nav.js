import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import About from '../pages/About'
// import Contact from '../pages/Contact'
import Packages from '../pages/Packages'
import Faq from '../pages/Faq'
import Landing from '../pages/Landing'

// import InstaFeed from '../inserts/InstaFeed'

class Nav extends Component{


    render(){
        return(
            <>
                <Router>
                    <div className="navbar navbar-expand-lg">
                        <ul className="nav nav-tabs btn-group" role="group">
                            <li>
                                <Link to={{
                                    pathname: '/',
                                    state: {
                                        docTitle: 'TZO Strength'
                                    }
                                }} className="btn btn-danger btn-responsive">Home</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/about',
                                    state: {
                                        docTitle: 'About Abiy'
                                    }
                                }} className="btn btn-danger btn-responsive">About</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/packages',
                                    state: {
                                        docTitle: 'Coaching Packages'
                                    }
                                }} className="btn btn-danger btn-responsive">Packages</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/faq',
                                    state: {
                                        docTitle: 'TZO FAQ'
                                    }
                                }} className="btn btn-danger btn-responsive">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="container-fluid content-section">
                        <Route path="/" exact component={Landing}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/packages" exact component={Packages}/>
                        <Route path="/faq" exact component={Faq}/>
                    </div>
                </Router>
            </>
        )
    }
}

export default Nav
