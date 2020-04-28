import React, {Component} from 'react'

class ContactLinks extends Component{
    render(){
        return(
            <div className="contact-list">
                    <div className="list-group list-group-horizontal">
                        <a className="list-group-item" href="#" target="_blank">LinkedIn</a>
                        <a className="list-group-item" href="#" target="_blank">GitHub</a>
                        <a className="list-group-item" href="#" target="_blank">Blog</a>
                    </div>
            </div>
        )
    }
}

export default ContactLinks
