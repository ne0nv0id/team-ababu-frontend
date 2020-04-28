import React, {Component} from 'react'
// import './App.css'

import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import InstaFeed from './components/inserts/InstaFeed'

import logo from './components/images/tzo_logo.jpg'

class App extends Component {

    render(){
        return(
            <>
            <div className="container app-main">
                <Header/>
                <InstaFeed/>
                <Nav/>

            </div>
            <Footer/>
            </>
        )
    }

}

export default App
