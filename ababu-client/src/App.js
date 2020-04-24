import React, {Component} from 'react'
// import './App.css'

import Nav from './components/Nav'
import Footer from './components/Footer'
import logo from './components/images/tzo_logo.jpg'

class App extends Component {

    render(){
        return(
            <>
            <div className="container app-main">
                <div className="logo-image">
                    <img src={logo} alt="TZO Entertainment Logo"/>
                </div>
                <Nav/>

            </div>
            <Footer/>
            </>
        )
    }

}

export default App
