import React, {Component} from 'react'
// import './App.css'
import MainCarousel from './MainCarousel'
import InstaFeed from './InstaFeed'

class Landing extends Component {

    render(){
        return(
            <div className="container">
                <h1>Landing</h1>
                <MainCarousel/>
                <InstaFeed/>
            </div>
        )
    }

}

export default Landing
