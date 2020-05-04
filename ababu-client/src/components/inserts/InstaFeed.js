import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../images/IMG_0836_c.jpeg'
import img2 from '../images/IMG_3310_c.jpeg'
import img3 from '../images/IMG_5599_c.jpg'

class InstaFeed extends Component {
    render(){
        return(
            <div className="insta-feed">
                <img src={img1} alt="Abiy, his client Christian, and his client/co-handler Miguel" className="insta-post"/>
                <img src={img2} alt="Abiy and 3 of his clients after the MD state championships" className="insta-post"/>
                <img src={img3} alt="Abiy and friends at his home gym, Chiseled Life" className="insta-post"/>
            </div>
        )
    }
}

export default InstaFeed
