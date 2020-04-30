import React, {Component} from 'react'

class MobilePackages extends Component{
    render(){
        return(
            <div className="faq-container">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header">Nutrition Only</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-1">$55/block</h6>
                        <p className="card-text">Learn how to take control of your nutrition with tracking macro nutrients. I will be available for check-ins and can adjust for pre-existing conditions, odd work hours, or other circumstances.</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3">
                    <div className="card-header">Custom Programming</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-1">$100/block</h6>
                        <p className="card-text">Along with nutrition coaching, I will be writing an individual program for you tailored to your strength goals. My clients are given my personal number, email, and Instagram for consistent feedback on how they are doing.</p>
                    </div>
                </div>
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header">Programming + Video</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-1">$150/block</h6>
                        <p className="card-text">Inclusive of Programming and Nutrition. At the end of each block in your programming, we will schedule a video call check-in to assess your progression and your goals in detail.</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3">
                    <div className="card-header">Meet Prep Only</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-1">$200/block</h6>
                        <p className="card-text">Meet prep only programming is for short-term clients who are specifically looking for me to guide them through their meet. This includes meet-day handling and will be different for every client. Contact me for more details.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobilePackages
