import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameInput: '',
            emailInput: '',
            inquiryInput: '',
            mailSent: false,
            error: null
        }
    }

    handleFormSubmit(event){
        event.preventDefault()
        console.log(this.state);
    }

    render(){
        return(
            <div className="form-div">
                <form action="/index/php" method="post" encType="text/plain">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name: </label>
                            <div className="col-sm-6">
                                <input type="text" name="name" className="form-control" id="nameInput" placeholder="Jean Pierre Polnareff"
                                    value={this.state.nameInput} onChange={e => this.setState({nameInput: e.target.value})}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email: </label>
                            <div className="col-sm-6">
                                <input type="text" name="email" className="form-control" id="emailInput" placeholder="example@example.com"
                                value={this.state.emailInput} onChange={e => this.setState({emailInput: e.target.value})}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inquiry" className="col-sm-2 col-form-label">Inquiry: </label>
                            <div className="col-sm-6">
                                <textarea name="inquiry" className="form-control" id="inquiryInput" placeholder="I was curious about..."
                                value={this.state.inquiryInput} onChange={e => this.setState({inquiryInput: e.target.value})}/>
                            </div>
                        </div>


                        <div className="input-group">
                            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Send" className="btn btn-warning" />
                            <input type="reset" value="Reset" className="btn btn-danger" />
                        </div>
                </form>
            </div>
        )
    }
}

export default Form
