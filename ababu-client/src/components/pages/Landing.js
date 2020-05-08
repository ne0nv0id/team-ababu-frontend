import React, {Component} from 'react'
// import './App.css'
// import MainCarousel from './MainCarousel'
import InstaFeed from '../inserts/InstaFeed'
import MobileInstaCarousel from '../inserts/MobileInstaCarousel'
// import CoachingPackages from '../inserts/CoachingPackages'
import BrandStatement from '../inserts/BrandStatement'

class Landing extends Component {


    componentDidMount(){
        document.title = 'TZO Strength'
    }

    render(){
        let width = window.innerWidth
        return(
            <div className="container">
                <h1 className="display-5">Welcome to TZO Strength</h1>
                {
                    width >= 800
                    ? <InstaFeed/>
                    : <MobileInstaCarousel/>
                }
                <BrandStatement/>
            </div>
        )
    }

}

export default Landing
