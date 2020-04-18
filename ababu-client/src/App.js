import React, {Component} from 'react'
// import './App.css'

import Nav from './components/Nav'
import logo from './components/images/tzo_logo.jpg'

class App extends Component {

    render(){
        return(
            <div className="container">
                <div className="logo-image">
                    <img src={logo} alt="TZO Entertainment Logo"/>
                </div>
                <Nav/>
            </div>
        )
    }

}

export default App
