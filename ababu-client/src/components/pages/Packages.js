import React, {Component} from 'react'
// import './App.css'

import Form from '../inserts/Form'
import ContactLinks from '../inserts/ContactLinks'
import PackagesTable from '../inserts/PackagesTable'

class Packages extends Component {

    render(){

        const linkColor = {
            color: '#dc3545'
        }

        return(
            <div className="container packages-div">
                <div className="packages-table">
                    <PackagesTable/>
                </div>

                <div className="packages-contact">
                    <Form/>
                </div>

            </div>
        )
    }

}

export default Packages
