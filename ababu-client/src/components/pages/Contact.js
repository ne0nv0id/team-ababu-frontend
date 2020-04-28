import React, {Component} from 'react'
// import './App.css'

class Contact extends Component {

    render(){

        const linkColor = {
            color: '#dc3545'
        }

        return(
            <div className="container">
                <h1>Contact</h1>

                <div className="">

                    <div className="contact-list">
                            <div className="list-group list-group-horizontal">
                                <a className="list-group-item" href="#" target="_blank">LinkedIn</a>
                                <a className="list-group-item" href="#" target="_blank">GitHub</a>
                                <a className="list-group-item" href="#" target="_blank">Blog</a>
                            </div>
                    </div>

                    <div className="form-div">
                        <form action="mailto:abiyababu1@gmail.com" method="post" enctype="text/plain">
                                <div className="form-group row">
                                    <label for="name" className="col-sm-1 col-form-label">Name: </label>
                                    <div className="col-sm-8">
                                        <input type="text" name="name" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="email" className="col-sm-1 col-form-label">Email: </label>
                                    <div className="col-sm-8">
                                        <input type="text" name="email" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inquiry" className="col-sm-1 col-form-label">Inquiry: </label>
                                    <div className="col-sm-8">
                                        <input type="text" name="inquiry" className="form-control"></input>
                                    </div>
                                </div>


                                    <div className="input-group">
                                        <input type="submit" value="Send" className="btn btn-outline-warning" />
                                        <input type="reset" value="Reset" className="btn btn-outline-danger" />
                                    </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Contact
