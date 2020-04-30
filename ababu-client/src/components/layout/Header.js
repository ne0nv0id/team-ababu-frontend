import React, {Component} from 'react'

import emblem from '../images/tzo_logo.jpg'

class Header extends Component{
    render(){
        return(
            <div className="site-head">
                <img src={emblem} alt="TZO Emblem" className="emblem"/>
                <div className="site-head-header">
                    <h2>TZO Strength</h2>
                </div>
            </div>
        )
    }
}

export default Header
