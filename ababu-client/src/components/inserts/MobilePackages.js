import React, {Component} from 'react'

class MobilePackages extends Component{
    render(){
        return(
            <div className="faq-container">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header text-center">Nutrition Only</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-1 text-center">$55/block</h6>
                        <ul className="card-text">
                            <li>Learn to track macros</li>
                            <li>Check-ins via text and scheduled calls</li>
                            <li>Consideration of dietary restrictions and health conditions</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3">
                    <div className="card-header text-center">Custom Programming</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-1 text-center">$100/block</h6>
                        <ul className="card-text">
                            <li>Inclusive of Nutrition</li>
                            <li>Individual program tailored to your strength goals</li>
                            <li>Consistent feedback via text/email/Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header text-center">Programming + Video</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-1 text-center">$150/block</h6>
                        <ul className="card-text">
                            <li>Inclusive of Custom Programming</li>
                            <li>Video check-in at the end of every block to discuss changes in program, reassessment of goals, etc.</li>
                            <li>Check-in calls scheduled via my calendar</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3">
                    <div className="card-header text-center">Meet Prep Only</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-1 text-center">$200/block</h6>
                        <ul className="card-text">
                            <li>Inclusive of Custom Programming + Video</li>
                            <li>Short-term programming to lead you through your meet</li>
                            <li>Meet day handling</li>
                            <li>Check-in frequency TBD, contact me for details</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobilePackages
