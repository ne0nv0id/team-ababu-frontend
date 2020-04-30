import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class InstaFeed extends Component {
    render(){
        return(
            <div className="insta-feed">
                <iframe className="insta-post" src="https://www.instagram.com/p/B53IXFbj4Qm/embed" frameBorder="0" scrolling="no" allowtransparency="true" title="highlight-1"/>
                <iframe className="insta-post" src="https://www.instagram.com/p/B53IXFbj4Qm/embed" frameBorder="0" scrolling="no" allowtransparency="true" title="highlight-2"/>
                <iframe className="insta-post" src="https://www.instagram.com/p/B53IXFbj4Qm/embed" frameBorder="0" scrolling="no" allowtransparency="true" title="highlight-3"/>
            </div>
        )
    }
}

export default InstaFeed
