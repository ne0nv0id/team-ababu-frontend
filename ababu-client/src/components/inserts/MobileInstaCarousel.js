import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../images/IMG_0836_c.jpeg'
import img2 from '../images/IMG_3310_c.jpeg'
import img3 from '../images/IMG_5599_c.jpg'
import img4 from '../images/IMG_5588_c.jpg'

class MobileInstaCarousel extends Component{
    render(){
        return(
            <div className="mobile-carousel">
                <
                    Carousel infiniteLoop showThumbs={false} showArrows={false}
                    showIndicators={false}
                    swipeable={true}
                    useKeyboardArrows
                    autoPlay
                >
                    <div className="carousel-img">
                        <img src={img1} alt="Abiy, his client Christian, and his client/co-handler Miguel"/>
                    </div>
                    <div className="carousel-img">
                        <img src={img2} alt="Abiy and 3 of his clients after the MD state championships"/>
                    </div>
                    <div>
                        <img src={img3} alt="Abiy and friends at his home gym, Chiseled Life"/>
                    </div>
                    <div className="carousel-img">
                        <img src={img4} alt="Abiy and Sammy congradulating his client James on a meet well done."/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default MobileInstaCarousel
