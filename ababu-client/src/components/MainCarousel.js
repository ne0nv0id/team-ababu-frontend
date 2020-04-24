import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import pic1 from './images/wp2613871.jpg'

class MainCarousel extends Component {


    render(){
        return(
            <div class="carousel-wrapper">
                <Carousel infiniteLoop showThumbs={false}>
                    <div>
                        <img src={pic1} alt="image"/>
                    </div>

                </Carousel>
            </div>
        )
    }
}

export default MainCarousel
