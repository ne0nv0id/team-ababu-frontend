import React, {Component} from 'react'
// import './App.css'
// import MainCarousel from './MainCarousel'
// import InstaFeed from './InstaFeed
import CoachingPackages from '../inserts/CoachingPackages'

class Landing extends Component {

    render(){
        return(
            <div className="container">
                <h1>Landing</h1>
                <CoachingPackages/>
            </div>
        )
    }

}

export default Landing
