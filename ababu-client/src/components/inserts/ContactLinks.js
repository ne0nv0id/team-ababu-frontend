import React, {Component} from 'react'

class ContactLinks extends Component{
    render(){
        return(
            <>
                <h3 className = "contact-head">Contact me via:</h3>
                <div className="contact-list">
                        <ul class="list-group list-group-horizontal-sm">
                            <a className="list-group-item" href="https://www.instagram.com/abiyababu/" target="_blank">Instagram</a>
                            <a className="list-group-item" href="mailto:vikram.sharma1024@gmail.com" target="_blank">Email</a>
                        </ul>
                </div>
            </>
        )
    }
}

export default ContactLinks
