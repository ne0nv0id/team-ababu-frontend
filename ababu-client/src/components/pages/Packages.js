import React, {Component} from 'react'
// import './App.css'

import Form from '../inserts/Form'
// import ContactLinks from '../inserts/ContactLinks'
import PackagesTable from '../inserts/PackagesTable'
import MobilePackages from '../inserts/MobilePackages'

class Packages extends Component {

    componentDidMount(){
        console.log(this.props.location);
        document.title = this.props.location.state.docTitle
    }

    render(){
        let width = window.innerWidth
        return(
            <div className="container packages-div">
                <h1 className="display-5">Coaching Packages</h1>
                <div className="packages-table">
                    {
                        width >= 800
                        ? <PackagesTable/>
                        : <MobilePackages/>
                    }
                </div>

                <div className="packages-contact">
                    <Form/>
                </div>

            </div>
        )
    }

}

export default Packages
