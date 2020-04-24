import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class InstaFeed extends Component {
    render(){
        return(
            <div className="insta-feed">
                <iframe className="insta-post" src="https://www.instagram.com/p/B53IXFbj4Qm/embed" width="320" height="360" frameborder="0" scrolling="no" allowtransparency="true"/>
                <iframe className="insta-post" src="https://www.instagram.com/p/B9I5cEAgZWj/embed" width="320" height="360" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                <iframe className="insta-post" src="https://www.instagram.com/p/B-nEJl7n3N7/embed" width="320" height="360" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
        )
    }
}

export default InstaFeed
