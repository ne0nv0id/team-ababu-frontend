import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


class MobileInstaCarousel extends Component{
    render(){
        return(
            <div className="mobile-carousel">
                <
                    Carousel infiniteLoop showThumbs={false} showArrows={false}
                    showIndicators={false}
                    swipeable={true}
                >
                    <div>
                        <iframe className="insta-post" src="https://www.instagram.com/p/B53IXFbj4Qm/embed" frameBorder="0" scrolling="no" allowtransparency="true" title="highlight-1"/>
                    </div>
                    <div>
                        <iframe className="insta-post" src="https://www.instagram.com/p/B53IXFbj4Qm/embed" frameBorder="0" scrolling="no" allowtransparency="true" title="highlight-1"/>
                    </div>
                    <div>
                        <iframe className="insta-post" src="https://www.instagram.com/p/B53IXFbj4Qm/embed" frameBorder="0" scrolling="no" allowtransparency="true" title="highlight-1"/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default MobileInstaCarousel
