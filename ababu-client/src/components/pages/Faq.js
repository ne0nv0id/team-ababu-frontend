import React, {Component} from 'react'
// import './App.css'

class Faq extends Component {

    componentDidMount(){
        console.log(this.props.location.state)
        document.title = this.props.location.state.docTitle
    }

    render(){

        return(
            <>
                <h1 className="display-5">FAQ</h1>
                <div className="faq-container">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">How do you handle pre-existing injuries?</div>
                        <div className="card-body">
                            <p className="card-text">Assuming you have been cleared by a qualified entity, we would test different movements and ROMs to find a few different movements that we can do pain-free and progress from there into the competition lifts if that is your goal.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-header">What type of people do you coach?</div>
                        <div className="card-body">
                            <p className="card-text">I have coached a wide variety of experience levels and in multiple federations. Whether you are a beginner, intermediate, or elite level lifter we will be able ot find a plan that will work for you.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Type of feedback and response time?</div>
                        <div className="card-body">
                            <p className="card-text">My clients have my phone number, email and Instagram so if you were to have a question as a client any of those methods can be utilized to get a hold of me(ideally text or instagram). I try to respond within a day of the messages being sent if I'm busy but normally if I see the message and have the time to provide a useful response I will.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-header">Programming sent out weekly or monthly?</div>
                        <div className="card-body">
                            <p className="card-text">Programs will be sent out full training block at a time. If adjustments need to be made during the block that can be done.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Expectation of progress?</div>
                        <div className="card-body">
                            <p className="card-text">The best way to answer this would be to explain my approach when working with a new client. First priority is to minimize aches and pains that the lifter has acquired over their career. Next priority is to address technique and find a groove that works for that lifters structure. Finally will be to push that new pattern towards some new maxes in training or at a comp. This process will take different amounts of time based on how much work we have to do on pain or with technique.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-header">Type of feedback and response time?</div>
                        <div className="card-body">
                            <p className="card-text">My clients have my phone number, email and Instagram so if you were to have a question as a client any of those methods can be utilized to get a hold of me(ideally text or instagram). I try to respond within a day of the messages being sent if I'm busy but normally if I see the message and have the time to provide a useful response I will.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Faq
