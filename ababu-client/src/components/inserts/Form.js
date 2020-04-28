import React, {Component} from 'react'

class Form extends Component{
    render(){
        return(
            <div className="form-div">
                <form action="mailto:abiyababu1@gmail.com" method="post" enctype="text/plain">
                        <div className="form-group row">
                            <label for="name" className="col-sm-2 col-form-label">Name: </label>
                            <div className="col-sm-6">
                                <input type="text" name="name" className="form-control"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="email" className="col-sm-2 col-form-label">Email: </label>
                            <div className="col-sm-6">
                                <input type="text" name="email" className="form-control"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inquiry" className="col-sm-2 col-form-label">Inquiry: </label>
                            <div className="col-sm-6">
                                <input type="text" name="inquiry" className="form-control"></input>
                            </div>
                        </div>


                        <div className="input-group">
                            <input type="submit" value="Send" className="btn btn-warning" />
                            <input type="reset" value="Reset" className="btn btn-danger" />
                        </div>
                </form>
            </div>
        )
    }
}

export default Form
